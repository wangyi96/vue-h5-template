import axios from 'axios'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '../config'
import methods from '../utils/methods'

// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = baseApi
// 超时时间
axios.defaults.timeout = 5000;

// request 请求拦截器
axios.interceptors.request.use(config => {
    const token = methods.getStorage('user') ? methods.getStorage('user').token : ''
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config
  },
  error => {
    setTimeout(() => {
      Toast.clear();
      Toast('加载超时');
    }, 10000)
    return Promise.reject(error)
  }
)

// respone 响应拦截器
axios.interceptors.response.use(response => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        Toast.clear();
        //清空token
        //重新跳转到登录页
        Toast('登录已过期，请重新登录');
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

// 发送请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
      axios.post(url, params)
          .then(
              res => {
                  resolve(res.data)
              },
              err => {
                  console.log('------1')
                  reject(err.data)
              }
          )
          .catch(err => {
              reject(err.data)
          })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
      axios.get(url, {
              params: params
          })
          .then(res => {
              resolve(res.data)
          })
          .catch(err => {
              reject(err.data)
          })
  })
}

// export default service
