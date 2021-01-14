<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :defaultActive="$route.meta.active"/>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/atom/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
    }
  },
  components: {
    TabBar
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>
