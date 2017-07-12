# hello-world-react

A React environment (React Project Template) built up from scratch with Webpack, Babel, ES6 and Yarn.

Kudos to [Joy Warugu](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel) for the parent tutorial.

## Toolchain

* [React](https://facebook.github.io/react/)
* [Babel](https://babeljs.io/)
* [ES6](https://github.com/lukehoban/es6features)
* [Yarn](https://yarnpkg.com)
* [Webpack](https://webpack.github.io)
* [Git](https://git-scm.com)

## Mac OS X Setup

```
$ brew update
$ brew install yarn 
```

## Yarn and Webpack 

Init yarn and press Enter upon each prompt.

```
$ yarn init
```

```
$ yarn add webpack webpack-dev-server path
$ git add package.json
$ git add yarn.lock
```

Now add node_modules/ to your .gitignore file.

```
$ touch .gitignore
$ nano .gitignore 
$ git add .gitignore
```

Add *webpack.config.js* (as shown below) which adds configuration to take index.js (and referenced .js 
and .jsx file) and to convert / transpile these using a babel-loader.

```
/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
```

### Webpack

To familiarise yourself with webpack, look at both the [documentation](https://webpack.github.io) and 
[github page](https://github.com/webpack/webpack).

## Babel

Add babel-loader dependencies specified in webpack.config.js. The preset dependencies are Babel plugins required for
Babel to convert es2015 and react code to plain Javascript in our files.

```
$ yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
```

### Configure Babel

Babel configuration goes in a .babelrc file (see the file in this directory).

```
$ touch .babelrc
$ git add .babelrc
```

With the following content in .babelrc, when babel-loader is called in webpack Babel will know which transformation libraries
it needs to use. 

```
/* 
    ./.babelrc
*/  
{
    "presets":[
        "es2015", "react"
    ]
}
```

## React

```
$ mkdir client
Nicos-Air:hello-world-react nico$ touch client/index.js && touch client/index.html
Nicos-Air:hello-world-react nico$ git add client/
```

Skeleton code in index.js and index.html.

### index.js

```
/*
    ./client/index.js
    this file is the webpack entry file
*/
console.log('Hello World');
```

### index.html

```
/*
    ./client/index.html
    basic html skeleton
*/
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React App Setup</title>
  </head>
  <body>
    <div id="root">
    </div>
  </body>
</html>
```

### Coding with React

React components will be coded with [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and also ES6. Our babel-loaders 
will convert these as the syntax of neither JSX nor ES6 is supported by most browsers at present.

Instead of adding script tags in order to reference the bundled javascript in index.html we'll use the *html-webpack-plugin* which takes
and html skeleton and inserts the script tags with a bit of configuration.

```
$ yarn add html-webpack-plugin
```

Add the html-webpack-plugin config lines depicted below into your *webpack.config.js* file. Be sure to add the new *plugins:* line close to the end.

```
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
```

The *html-webpack-plugin* configuration sets our skeletion index.html as template, it will generate index.html as specified by the filename 
configuration and due to the *inject: 'body'* configuration will add any Javascript to the bottom of the page just before the closing 
*<body>* tag.

#### Run

Add the scripts key to *package.json* (see the file for suggested placement).

```
"scripts": {
    "start": "webpack-dev-server"
  },
```

Now run the application with:

```
$ yarn start
```

Open http://localhost:8080 in Chrome with Developer Tools open and look at the html and console output. As expected you'll see 
*webpack-dev-server* running when you issue the start command.

#### Add A React Component

```
$ yarn add react react-dom
```

File structure preparation and note by convention React uses [PascalCase](http://wiki.c2.com/?PascalCase) for file names (hence App.jsx):

```
$ mkdir client/components
$ touch client/components/App.jsx
$ git add client/components/
```

##### App.jsx

```
/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}
```

##### index.js

```
/*
    this file is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
```

## React Project Template - Done!

We now have a working React Project Template that can be used as a template for other projects.