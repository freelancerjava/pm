const staticsBaseURL = 'http://example.com'

const prodServer = 'https://app.pointmax.io'

export default {
  staticsBaseURL,

  apisauce: {
    baseURL: prodServer,

    headers: {
      'Accept': 'application/json',
      // 'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    }
  },
}
