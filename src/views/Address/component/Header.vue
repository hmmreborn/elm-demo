<template>
  <div class="header">
    <van-nav-bar
      title="选择收货地址"
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant'
import 'vant/lib/nav-bar/style'
export default {
  name: 'Header',
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";
  .header{
    .van-nav-bar{
      @include bg-linear-gradient(90deg,#0af,#0085ff);
      .van-nav-bar__title,.van-icon{color: #fff;}
    }
  }
</style>
