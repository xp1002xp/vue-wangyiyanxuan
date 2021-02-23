const px2rem = require('postcss-px2rem');
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   // 设计稿10等分之后的值
});
module.exports = {
    lintOnSave: false,

    // 不生成 source map文件
    productionSourceMap: false,
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.you.163.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    },
}