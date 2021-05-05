module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://record.ismdeep.com/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
