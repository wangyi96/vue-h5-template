import api from './index'
// axios
import {get,post} from './config'

export default {
  // 登录
  login(data) {
    return post(api.Login,data)
  },
  // 用户信息 post 方法
  getUserInfo(data) {
    return post('api/customer/customerDetail',data)
  },
  // 用户名称 get 方法
  getUserName() {
    return get(api.UserName)
  }
}
