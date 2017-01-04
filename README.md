## pxrem-loader
[![Build Status](https://travis-ci.org/cupools/pxrem-loader.svg?branch=master)](https://travis-ci.org/cupools/pxrem-loader)
[![Coverage Status](https://coveralls.io/repos/github/cupools/pxrem-loader/badge.svg?branch=master)](https://coveralls.io/github/cupools/pxrem-loader?branch=master)

## Usage
> Transforming css from px to rem, base on [pxrem](https://github.com/cupools/pxrem)

## Getting Started

```bash
$ npm i cupools/pxrem-loader
```
```js
// webpack.config.js
module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!pxrem?root=75&fixed=6'
    }]
  }
}
```

## Options

- root: root value from px to rem, default to 75
- fixed: precision of rem value, default to 6
- filter: css declaration that should be ignored, can be regexp or function, default to null
- keepPx: keep px for compatible in old browsers, default to false
- commentFilter: comment after css declaration that should be ignored, default to 'no'


## Examples

### With SASS

```js
// webpack.config.js
module.exports = {
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!pxrem!sass'
    }]
  },
  pxrem: {
    root: 75,
    filter: /^border/,
    fixed: 4,
    keepPx: false,
    commentFilter: 'no'
  }
}
```

```css
/* source */
.foo {
  width: 75px;
  height: 10px;
  font-size: 24px;
  background: url('icon.png') no-repeat;
  background-size: 15px 15px;
  border: 1px solid #000;
}

/* output */
.foo {
  width: 1rem;
  height: 0.133333rem;
  font-size: 24px;
  background: url('icon.png') no-repeat;
  background-size: 0.2rem 0.2rem;
  border: 1px solid #000;
}
```

## Test

```bash
$ npm i && npm test
```
