module.exports = {
    apps: [
        {
            name: 'korp-konflikty',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}