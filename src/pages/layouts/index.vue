<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        // {
        //   title: '首页',
        //   to: {
        //     name: 'Home'
        //   },
        //   inactive:
        //     "http://sucai.suoluomei.cn/sucai_zs/images/20200325141846-%E9%9B%B7%E8%BE%BE.png",
        //   active:
        //     "http://sucai.suoluomei.cn/sucai_zs/images/20200325141846-%E9%9B%B7%E8%BE%BE2.png"
        // },
        // {
        //   title: '我的1',
        //   to: {
        //     name: 'About'
        //   },
        //   inactive:
        //     "http://sucai.suoluomei.cn/sucai_zs/images/20200324113335-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200324113316.png",
        //   active:
        //     "http://sucai.suoluomei.cn/sucai_zs/images/20200324113335-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200324113320.png"
        // },
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '我的',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  mounted(){
    console.log(this.decideBrowser())
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    },
    //判断是否在微信端打开当前页面
    decideBrowser(){
      let ua = navigator.userAgent.toLowerCase();
      let isWeixin = ua.indexOf('micromessenger') != -1;
      if (isWeixin) {
        return true;
      }else{
        return false;      
      }
    }
  }
}
</script>
