<template>
  <div class="header">
    <van-nav-bar
      title="城市选择"
      left-arrow
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
      this.$router.back()
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
      &:after{
        border: 0;
      }
    }
  }
</style>
