## vue-h5-template
- 基于vue-cli3.0+webpack 4+vant ui + sass+ rem + fonts适配方案+axios封装，构建手机端模板脚手架
- node版本 v10.16.3  npm版本 v6.9.0

### 使用项目
- ``npm install `` 下载环境所需依赖
- ``npm run serve``启动本地环境
- ``npm run build``打包到生产环境

### 介绍
- vuecli3.0      
- 多环境开发       
- axios封装         
- rem适配方案        
- babel低版本浏览器兼容
- 环境发布打包脚本
- sass编写样式

### api文件夹
- 存放接口配置

### assets资源文件夹
- images文件夹存放图片资源
- css文件夹预存了一些commoncss，和一些scss配置
- fonts字体图标库，自行引入修改
  ```
    // 多行隐藏
    @mixin textoverflow($clamp:1) {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: $clamp;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
    }

    使用方法：@include

    .test{
      width: 100px;
      height: 50px;
      background: #ff5500;
      @include textoverflow(3)
    } 
  ```


### plugins
- vant的组件引入

### rem适配方案
- 选用rem的原因是因为vant直接给到了这个适配方案，个人也比较喜欢这个方案
[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)  

### 跨域配置
- 在vue.config.js文件里去配置跨域
- 开发的时候需要打开proxy，修改config里面env.development.js文件里的baseApi
  ```
    proxy: {
        //配置跨域
        '/api': {
            target: "http://xxx.xxx.xx.xxx",
            //是否允许跨域
            changOrigin:true,
            //代理配置正则，接口有api的时候会去掉api
            pathRewrite:{
                '^/api':'/'
            }
        }
      }
  ```

### utils
- 公共组件，插件方法库

### 使用Fastclick出现的问题
- fastclick重写input textarea中聚焦问题
- ios视频控件点击播放要双击问题
```
  // fastclick重写input textarea中聚焦问题
  FastClick.prototype.focus = function (targetElement) {
    var length;
    if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.focus();
      //  修复ios 11.3以上不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };

  // ios视频控件点击播放要双击问题
  var deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone
  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case 'button':
      case 'select':
      case 'textarea':
        if (target.disabled) {
          return true
        }
        break
      case 'input':
        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if ((deviceIsIOS && target.type === 'file') || target.disabled) {
          return true
        }
        break
      case 'label':
      case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
      case 'video':
        return true
    }
    return (/\bneedsclick\b/).test(target.className) || /\bvjs/.test(target.className)
  }
```

