<template>
  <div class="home">
    <Header/>
    <Search/>
    <Swiper :list="swiperIcon"/>
    <div class="loading"><van-loading color="#1989fa" v-if="isLoading"/></div>
    <Recommend :list="shops"/>
  </div>
</template>

<script>
import Header from './Header/Header'
import Search from './Search/Search'
import Swiper from './Swiper/Swiper'
import Recommend from './Recommend/Recommend'
import { mapState, mapActions } from 'vuex'
import { Loading } from 'vant'
export default {
  name: 'home',
  components: {
    Header,
    Search,
    Swiper,
    Recommend,
    [Loading.name]: Loading
  },
  computed: {
    ...mapState(['swiperIcon', 'info', 'shops', 'isLoading'])
  },
  created () {
    this.getIcons()
    this.getShopInfo()
    this.getShops()
  },
  methods: {
    ...mapActions(['getIcons', 'getShopInfo', 'getShops'])
  }
}
</script>
<style lang="scss" scoped>
  .home{
    margin-bottom: 50px;
  }
  .loading{
    text-align: center;
  }
</style>
