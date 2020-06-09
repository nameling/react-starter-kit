import webpack from  'webpack';
import paths from './paths';

const dllConfig : webpack.Configuration = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react']
  },
  output: {
    path: paths.appDistDll,
    filename: 'vendor.dll.js', // 输出动态链接库的名称
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[hash:8]_",
      path: paths.appDistDllManifestJson,
    })
  ]
}

export default dllConfig;
