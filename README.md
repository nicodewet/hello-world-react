# hello-world-react

A React environment built up from scratch with Webpack, Babel, ES6 and Yarn.

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

Add webpack.config.js (see the file in this directory) and add configuration to take index.js (and referenced .js 
and .jsx file) and to convert / transpile these using a babel-loader.

