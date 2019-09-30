<template>
  <div id="app">
    <router-view/>
    <tab-bar v-if="$route.meta.showFooter"> </tab-bar>
  </div>
</template>
<script>
import TabBar from './components/TabBar/TabBar'
export default {
  components: {
    TabBar
  }
}
</script>
<style lang="scss">
</style>
