/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/jetlinks': {
      // target: 'http://192.168.33.222:8844/',
      // ws: 'ws://192.168.33.222:8844/',
      // target: 'http://water.zlkjhb.com:9000/jetlinks',
      // ws: 'http://water.zlkjhb.com:9000/jetlinks',
      // ws: 'ws://test.jetlinks.cn/jetlinks',
      // target: 'http://test.jetlinks.cn/jetlinks',
      // target: 'http://192.168.32.8:8844/',
      // ws: 'ws://192.168.32.8:8848/',
      target: 'http://localhost:8848/',
      ws: 'ws://localhost:8848/',
      changeOrigin: true,
      pathRewrite: { '^/jetlinks': '' },
    },
  },
  test: {
    '/jetlinks': {
      // target: 'http://192.168.3.89:8848/',
      target: 'http://2.jetlinks.org:9010/',
      changeOrigin: true,
      pathRewrite: { '^/jetlinks': '' },
    },
  },
  pre: {
    '/jetlinks': {
      // target: 'http://192.168.3.89:8848/',
      target: 'http://2.jetlinks.org:9010/',
      changeOrigin: true,
      pathRewrite: { '^/jetlinks': '' },
    },
  },
};
