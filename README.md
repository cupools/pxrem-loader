# pxrem-loader
> Transforming css from px to rem, base on [pxrem](https://github.com/cupools/pxrem)

## Todo

- [x] Test coverage
- [ ] Examples
- [ ] 中文文档
- [ ] Publish to npm

## Usage

```js
// webpack.config.js
module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!pxrem?root=75&filter=border'
    }]
  }
}
```

or

```js
// webpack.config.js
module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!pxrem'
    }]
  },
  pxrem: {
    root: 1000,
    filter: /^border/,
    fixed: 4,
    keepPx: false,
    commentFilter: 'no'
  }
}
```


## Options

- root: root value from px to rem, default to 75
- filter: css declaration that should be ignored, can be regexp or function, default to null
- fixed: precision of rem value, default to 6
- keepPx: keep px for compatible in old browsers, default to false
- commentFilter: comment after css declaration that should be ignored, default to 'no'
