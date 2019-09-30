<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
import { NavBar, Toast } from 'vant'
import 'vant/lib/nav-bar/style'
import 'vant/lib/toast/style'
export default {
  name: 'NavBar',
  props: {
    title: String
  },
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<style scoped lang="scss">
</style>
