module.exports = {
	apps: [
		{
			name: 'server1',
			script: 'src/index.js',
			env: {
				PORT: 8080,
			},
		},
		{
			name: 'server2',
			script: 'src/index.js',
			env: {
				PORT: 8081,
			},
		},
		{
			name: 'server3',
			script: 'src/index.js',
			env: {
				PORT: 8082,
			},
			exec_mode: 'cluster',
			node_args: '--harmony',
			instances: 4,
		},
	],
}
