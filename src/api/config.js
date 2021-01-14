import axios from 'axios'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '../config'
import router from '../router'
import methods from '../utils/methods'

// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = baseApi
// 超时时间
axios.defaults.timeout = 5000;

// request 请求拦截器
axios.interceptors.request.use(config => {
    config.headers.channel = 'h5'
    const token = methods.getSessionStorage('loginToken') ? methods.getSessionStorage('loginToken') : ''
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (token) {
      config.headers.token = token;
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
    axios.post(url, params).then(
      res => {
        if(res.code == 410007 || res.code == 410001){
          Toast(res.msg);
          // if(methods.decideBrowser()){
          //   window.location.href = 'https://crm.xcyunxt.com/front/wxlogin.html';
          // }else{
          //   router.push({name:'Login'})
          // }
          router.push({name:'Login'})
          methods.removeSession('loginToken');
        }else if(res.code == 0){
          if(res.data == 'null'){
            resolve(res)
          }else{
            resolve(res.data)
          }
        }else{
          resolve(res);
        }
      },
      err => {
        console.log('error',err)
        reject(err)
      }
    )
    .catch(err => {
      reject(err)
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
