module.exports = {
    pages: {
        index: {
            entry: './src/pages/index/main.js',
            template: './public/index.html',
            filename: 'index.html',
        },
    },
    outputDir: '/dist',
    lintOnSave: false,
    filenameHashing: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
        },
    },
}