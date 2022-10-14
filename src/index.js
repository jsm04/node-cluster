import express from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).send({ status: 'ok', message: `Route working on ${process.env.PORT}` })
})

app.listen(process.env.PORT, () => {
	console.log(`Listening on PORT`)
})

