import http from 'http'

const encoding = 'utf-8'

const message = 'using typescript on node.js'

const server = http.createServer((request, response) => {
  response.end(message, encoding)
})

export default server
