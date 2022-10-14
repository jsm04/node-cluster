import cluster from 'cluster'
import express from 'express'
import os from 'os'
import config from './configs/config.js'
import _dotenv from './configs/dotenv.js'
import info_router from './routes/info-route.js'

const PORT = config.PORT || process.env.PORT

const CPUs = os.cpus().length

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (cluster.isPrimary) {
	for (let index = 0; index < CPUs; index++) {
		cluster.fork()
	}

	cluster.on('exit', (worker) => {
		console.log(`Worker process with pid finished ${worker.process.pid}`)
		cluster.fork()
	})
} else {
	app.listen(PORT, () => {
		console.log(`Server working on ${PORT} with worker pid ${process.pid}`)
	})
}

app.use('/api/info', info_router)

app.use('/', (req, res) => {
	res.send(`Process with pid ${process.pid} worked in this consult`)
})
