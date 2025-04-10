// import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/login',
    method: 'post',
    response: ({ body }) => {
      console.log(body)
      return {
        code: 0,
        data: {
          name: 'y05',
          token: 'xxxxxxx',
          credit: 0,
          used: 0,
          canUse: 0,
          serialNum: '25089',
        },
      }
    },
  },
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
]
