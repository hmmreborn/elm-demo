<template>
  <van-tabbar
    fixed
    border
    route>
    <van-tabbar-item
      replace
      to="/home"
    >
      <span class="icon iconfont icon-eliaomo"></span>
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/discover"
    >
      <span class="icon iconfont icon-discover"></span>
      发现
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/order"
    >
      <span class="icon iconfont icon-order"></span>
      订单
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/profile"
    >
      <span class="icon iconfont icon-mine"></span>
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
export default {
  name: 'TabBar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixins";
  .van-tabbar--fixed{
    z-index: 202 !important;
  }
  .icon{
    display: block;
    text-align: center;
    padding-bottom: 5px;
    @include font-size(20px)
  }
  .van-tabbar-item{
    &.van-tabbar-item--active{
      background-image: linear-gradient(45deg,#0af,#0085ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
