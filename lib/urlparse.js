function queryParse(url = '') {
  const qs = {}
  url.replace(/([^?=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    // avoiding 0 case
    if ($3 === undefined) {
      return ''
    }
    try {
      qs[$1] = decodeURIComponent($3)
    } catch (e) {
      qs[$1] = $3
    }
    return ''
  })
  return qs
}

function queryStringify(params = {}) {
  return Object.keys(params)
    .map(key => {
      let value = params[key]
      // only undefined/null be set to ''
      if (value == null) {
        value = ''
      }
      return `${key}=${encodeURIComponent(value)}`
    })
    .join('&')
}

function addQuery(url = '', params) {
  if (typeof params === 'string') {
    params = queryParse(params)
  }
  const oldParams = queryParse(url)
  const baseUrl = url.replace(/\?.*/, '')

  return baseUrl + '?' + queryStringify({
    ...oldParams,
    ...params,
  })
}

module.exports = {
  addQuery,
  queryParse,
  queryStringify
}

