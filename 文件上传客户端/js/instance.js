let instance = axios.create()
instance.defaults.baseURL = 'http://127.0.0.1:8888'
instance.defaults.headers['Content-Type'] = 'multipart/form-data'

// `transformRequest` 允许在向服务器发送前，修改请求数据
// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
instance.defaults.transformRequest = (data, headers) => {
  const contentType = headers['Content-Type']
  if (contentType === 'application/x-www-form-urlencoded') return Qs.stringify(data)
  return data
}
instance.interceptors.response.use(response => {
  return response.data
})
