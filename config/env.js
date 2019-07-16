const path  = require('path');
const { proxy } = require('./proxy');

// 根据 npm start --[参数] 进行环境切换
let proxyCurrent = proxy.dev;
for (const key in proxy) {
    if (process.env[`npm_config_${key}`]) {
        proxyCurrent = { ...proxyCurrent, ...proxy[key] };
    }
}

const config = {
  devServer: {
    proxy: proxyCurrent
  }
}

module.exports  = config;
