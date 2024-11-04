module.exports = {
    apps: [
        {
            name: 'korpkonflikty',
            script: '.output/server/index.mjs',
            exec_mode: 'fork', // Опция 'fork' позволяет запускать процесс в отдельном форке
            instances: 1, // Количество экземпляров процесса
            autorestart: true, // Автоматически перезапускать при падении
            watch: false, // Не следить за изменениями файлов (можно включить, если требуется)
            env: {
                HOST: '0.0.0.0',
            },
        },
    ],
};
