module.exports = {
    //到时候这些配置会被导出，与node_modules的配置做一个合并
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'component': '@/component',
                'network': '@/network',
                'page': '@/page',
            }
        }
    }
}