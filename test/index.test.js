/* eslint-env mocha */

import Chai from 'chai'
import chaiCss from 'chai-css'
import loader from '../index'

Chai.use(chaiCss)
Chai.should()

describe('webpack config', function () {
  const stylesheet = [
    '.foo {',
    'width: 15px;',
    'height: 10px;',
    'font-size: 16px; /*no*/',
    'border: 1px solid #000;',
    '}'
  ].join('\n')

  it('should get default option', function () {
    loader.call({}, stylesheet).should.have.rule('.foo')
      .and.have.decl({
        width: '0.2rem',
        height: '0.133333rem',
        fontSize: '16px',
        border: '0.013333rem solid #000'
      })
  })

  it('should get query option', function () {
    let option = {
      query: '?root=75&filter=width|bor&fixed=2'
    }
    loader.call(option, stylesheet).should.have.rule('.foo')
      .and.have.decl({
        width: '15px',
        height: '0.13rem',
        fontSize: '16px',
        border: '1px solid #000'
      })
  })

  it('should get extend option', function () {
    let option = {
      query: '?root=75&filter=width|bor',
      options: {
        pxrem: {
          root: 10,
          filter: prop => prop !== 'height',
          fixed: 2
        }
      }
    }
    loader.call(option, stylesheet).should.have.rule('.foo')
      .and.have.decl({
        width: '15px',
        height: '0.13rem',
        fontSize: '16px',
        border: '1px solid #000'
      })
  })
})
