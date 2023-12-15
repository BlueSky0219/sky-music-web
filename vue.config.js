const {defineConfig} = require('@vue/cli-service')

const name = process.env.VUE_APP_TITLE || 'sky-music' // 网页标题
const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭eslint
    devServer: {
        port: port,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
            }
        }
    }
})
