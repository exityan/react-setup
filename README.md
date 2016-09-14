# Setting up React Project (React + Babel + Webpack)

## Start node project
```
$ mkdir my-react
$ cd my-react
$ node init -y
```

## React
```
$ npm install --save react react-dom
```

## Babel
```
$ npm install --save-dev babel-preset-es2015 babel-preset-react
```

**.babelrc**
```json
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

## Webpack
```
$ npm install --save-dev webpack webpack-dev-server babel-loader
```

**webpack.config.js**
```js
module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

**package.json**
```json
"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

## React Hot Loader
- webpack plugin
- when editing react code, live refresh maintaing state

```
$ npm install --save-dev react-hot-loader
```
**webpack.config.js**
```js
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

```

**.babelrc**
```json
{
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```


## HTML Webpack Plugin
```
$ npm install --save-dev html-webpack-plugin
```
**webpack.config.js**
```js
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
```

## Source file
**src/index.html**
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>
  </body>
</html>
```

**src/index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

**src/components/App.jsx**
```js
import React from 'react';

export default class App extends React.Component {
  render() {
    return <div>My React App</div>;
  }
}
```

## Add npm script
**package.json**
```json
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
  },
```

## Build
```
$ npm run build
```

## Start Dev Server
```bash
$ npm run start
```
