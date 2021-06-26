module.exports = {
    pages: {
        index: {
            entry: './src/pages/index/main.js',
            template: './public/index.html',
            filename: 'index.html',
        },
        level: {
            entry: './src/pages/level/main.js',
            template: './public/index.html',
            filename: 'level.html',
        },
        level_detail: {
            entry: './src/pages/level-detail/main.js',
            template: './public/index.html',
            filename: 'level_detail.html',
        },
    },
    outputDir: './dist',
    lintOnSave: false,
    filenameHashing: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3210',
            },
        },
    },
}