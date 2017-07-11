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

Add webpack.config.js (see the file in this directory) which adds configuration to take index.js (and referenced .js 
and .jsx file) and to convert / transpile these using a babel-loader.

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



