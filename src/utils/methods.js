const methods = {
  //缓存数据
  getStorage(data){
    return localStorage.getItem(data);
  },
  setStorage(item,data){
    return localStorage.setItem(item,data);
  },
  getSessionStorage(item){
    return sessionStorage.getItem(item);
  },
  setSessionStorage(item,data){
    return sessionStorage.setItem(item,data);
  },
  //格式化时间 yyyy-MM-dd hh:mm:ss
  formatDate(time, fmt) {
    if (time === undefined || '') {
      return
    }
    const date = new Date(time)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
    }
    return fmt
  }
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export default methods