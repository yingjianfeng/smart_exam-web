//配置别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'assets': '@/assets',
        'network': '@/network',
      }
    }
  }
};

