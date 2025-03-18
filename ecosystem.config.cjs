module.exports = {
    apps: [
        {
            name: 'korp-konflikty.ru',
            port: '10000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}