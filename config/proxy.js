const proxy = {
  dev: {
      '/api3': {
          changeOrigin: true,
          target: 'http://172.21.247.157:7070',
          headers: {
              'X-Forwarded-For': '127.0.0.1', // 最重要的一条
              'X-Real-IP': '127.0.0.1',
              Host: '172.21.247.157:7070',
          },
      },
      '/api': {
          changeOrigin: true,
          target: 'http://172.21.247.157:7070',
          pathRewrite: {
              '^/api': '/api3/wolfram/',
          },
      },
  },
  qa: {
      '/api3': {
          changeOrigin: true,
          target: 'http://10.11.128.28:7070',
          headers: {
              'X-Forwarded-For': '127.0.0.1', // 最重要的一条
              'X-Real-IP': '127.0.0.1',
              Host: '10.11.128.28:7070',
          },
      },
      '/api': {
          changeOrigin: true,
          target: 'http://10.11.128.28:7070',
          pathRewrite: {
              '^/api': '/api3/wolfram/',
          },
      },
  },
  online: {
      '/api3': {
          changeOrigin: true,
          target: 'http://saas-fe-console.internal.weimob.com',
          headers: {
              'X-Forwarded-For': '127.0.0.1', // 最重要的一条
              'X-Real-IP': '127.0.0.1',
              Host: 'saas-fe-console.internal.weimob.com',
          },
      },
      '/api': {
          changeOrigin: true,
          target: 'http://saas-fe-console.internal.weimob.com',
          pathRewrite: {
              '^/api': '/api3/wolfram/',
          },
      },
  },
  mock: {
      '/api': {
          changeOrigin: true,
          target: 'https://www.easy-mock.com/mock/5b4839a7d078f153e7c12b0d',
      },
  },
};
module.exports = {
  proxy,
};
