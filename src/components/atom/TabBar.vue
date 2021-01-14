<template>
  <div class="tabbar-wrap">
    <van-tabbar fixed v-model="active" active-color='#f32222' :border='false' class="fix">
      <van-tabbar-item icon-prefix='iconfont' icon="home" :to="{name:'Home'}">
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon-prefix='iconfont' icon="mine" :to="{name:'About'}">
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>

    <div class="blank"></div>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    }
  },
  watch:{
    '$route':{
      handler(val){
        this.active = val.meta.active
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  mounted(){
  },
  methods: {
    goPath(name){
      if(name){
        this.$router.push({
          name
        })
      }else{
        Toast('敬请期待~')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tui{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100000;
}

.fastAdd{
  width: 320px;
  height: 240px;
  background: white;
  position: relative;
  .head{
    width: 115px;
    height: 25px;
    // background: url('../../assets/images/fastAdd/head_bg.png') no-repeat  0/100%;
    margin: 0 auto;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
  .content{
    display: flex;
    justify-content: space-between;
    padding: 50px 30px 0 30px;
    .item{
      >img{
        width: 62px;
        height: 62px;
      }
      >span{
        margin-top: 15px;
        color: #333;
        font-size: 15px;
      }
    }
  }
}

/deep/ .van-popup--center.van-popup--round{
  border-radius:7px
}

[class*=van-hairline]::after{
  border:none!important
}
.tabbar-wrap{
  .van-tabbar{
    z-index: 99;
    // background: rgba(255,255,255,.0);
    box-shadow: 0px 0px 9px 0px
		rgba(205, 205, 205, 0.55);
    /deep/ .van-tabbar-item:not(:nth-child(3)){
      background: #fff;
    //   box-shadow: -2px -8px 9px -6px 
    // rgba(205, 205, 205, 0.55);
    //   position: relative;
    }
    /deep/ .van-tabbar-item:nth-child(3){
      .van-tabbar-item__text{
        padding-bottom:4px
      }
    }
  }
  .blank {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
    height: constant(safe-area-inset-bottom);
    height: env(safe-area-inset-bottom);
    background-color: #fff;
  }
}

</style>