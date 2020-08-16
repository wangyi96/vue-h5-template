<template>
  <div>
    <van-tabbar fixed route v-model="active" @change="handleChange">
      <van-tabbar-item v-for="(item, index) in data" :to="item.to" :icon="item.icon" :key="index">
        {{item.title}}
      <!-- <span v-if="index !=2">{{item.title}}</span>
      <img v-if="index !=2" slot="icon" slot-scope="props" :src="props.active ? item.active : item.inactive" />
      <div v-if="index ==2">
        <img class="tui" src="http://sucai.suoluomei.cn/sucai_zs/images/20200604173603-12.png" alt="">
      </div> -->
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.tui{
  width: 50px;
  height: 50px;
  margin-top: -20px;
  z-index: 100000;
}

[class*=van-hairline]::after{
  border:none!important
}
</style>
