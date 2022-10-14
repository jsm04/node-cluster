import minimist from 'minimist'

const { PORT, MODE } = minimist(process.argv.slice(2), {
	alias: { p: 'PORT', m: 'MODE' },
	default: { p: process.env.PORT, m: 'FORK' },
})

const config = {
	PORT,
	MODE,
}
export default config
