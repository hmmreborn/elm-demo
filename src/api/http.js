import axios from 'axios'
import QS from 'qs'
import store from '../store'
import { Toast } from 'vant'
import 'vant/lib/toast/style'

const instance = axios.create({
  timeout: 1000
})

instance.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = QS.stringify(config.data)
    }
    store.state.isLoading = true
    return config
  },
  error => {
    Toast.fail({
      message: error && error.data.error.message
    })
    store.state.isLoading = false
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    if (response.data && response.data.success) {
      Toast.fail({
        message: response.data.error.message.message
          ? response.data.error.message.message
          : response.data.error.message
      })
      return Promise.reject(response.data.error.message)
    }
    store.state.isLoading = false
    return response.data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          Toast('错误请求')
          break
        case 401:
          Toast('未授权，请重新登录')
          break
        case 403:
          Toast('拒绝访问')
          break
        case 404:
          Toast('请求错误,未找到该资源')
          break
        case 405:
          Toast('请求方法未允许')
          break
        case 408:
          Toast('请求超时')
          break
        case 500:
          Toast('服务器端出错')
          break
        case 501:
          Toast('网络未实现')
          break
        case 502:
          Toast('网络错误')
          break
        case 503:
          Toast('服务不可用')
          break
        case 504:
          Toast('网络超时')
          break
        case 505:
          Toast('http版本不支持该请求')
          break
        default:
          Toast({
            message: `未知错误${error.response.status}`
          })
      }
    } else {
      Toast.fail({
        message: '连接到服务器失败'
      })
    }
    return Promise.reject(error)
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance({
      url: url,
      method: 'get',
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance({
      url: url,
      method: 'post',
      data: QS.stringify(params)
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
export default {
  get,
  post
}
