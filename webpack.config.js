// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import path from 'path';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import webpack from 'webpack';

// // const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const __dirname = path.resolve();

// const config = {
//   entry: './src/App.jsx',
//   output: {
//     path: path.resolve(__dirname, 'static'),
//     filename: 'app.bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//     ]
//   },
//   plugins: [
//     new BundleAnalyzerPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new ReactRefreshWebpackPlugin(),
//   ],
//   devServer: {
//     port: 8000,
//     static: {
//       directory: path.join(__dirname, 'static'),
//     },
//     proxy: {
//       '/api/*': {
//         target: 'http://localhost:3000'
//       },
//     },
//     historyApiFallback: true,
//   },
//   devtool: 'eval-source-map',
//   mode: 'development',
// }

// export default config;

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';

const __dirname = path.resolve();

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8000',
    './src/App.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    port: 8000,
    static: {
      directory: path.join(__dirname, 'static'),
    },
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      },
    },
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  mode: 'development',
}

export default config;