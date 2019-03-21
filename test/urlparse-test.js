const {
  addQuery,
  queryParse,
  queryStringify
} = require('../lib/urlparse')

const assert = require('assert')

describe('urlparse', () => {
  it('addQuery', () => {
    const url = addQuery('/path', {
      test: 'test'
    })
    assert.strictEqual(url, '/path?test=test')
  })

  it('queryParse', () => {
    const param = queryParse('/path?test=0&test1=test1')
    assert.deepStrictEqual(param, {
      test: '0',
      test1: 'test1'
    })
  })

  it('queryStringify', () => {
    const str = queryStringify({
      test: 'test1',
      test1: 'test2',
    })
    assert.equal(str, 'test=test1&test1=test2')
  })
})
