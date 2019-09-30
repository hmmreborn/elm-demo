<template>
  <div class="search-wrap">
    <div class="search">
      <div class="input-address">
        <span class="iconfont icon-search"></span>
        <input type="text" placeholder="输入城市或者拼音" v-model="keyword"/>
      </div>
    </div>
    <div class="search-content"
         ref="wrapper"
         v-show="keyword">
      <ul>
        <li class="search-item"
          v-for="item of list"
            :key="item.id"
            @click="clickCity(item.name)"
        >{{item.name}}</li>
      </ul>
      <section class="NoDataTip" v-show="hasNoData">
        <img src="../../../assets/img/not-find-gif.gif" alt="">
        <h3>没有搜索结果</h3>
        <p>换个关键字试试</p>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    clickCity (city) {
      this.CHANGE_CITY(city)
      this.$router.push({ name: 'address' })
    },
    ...mapMutations(['CHANGE_CITY'])
  },
  updated () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";
  .search{
    display: flex;
    @include bg-linear-gradient(90deg, #0af, #0085ff);
    .input-address{
      position: relative;
      padding: .625rem .9375rem;
      flex: 1;
      .icon-search{
        position: absolute;
        top: 1.375rem;
        left: 1.875rem;
        font-size: 12px;
        color: #666;
      }
      input[type='text']{
        width: 100%;
        height: 2.25rem;
        padding: .5625rem 1.125rem .5625rem 2.1875rem;
        border-radius: 1.125rem;
        outline: 0;
        border: none;
        background-color: #fff;
        font-size: .875rem;
        box-sizing: border-box;
      }
    }
  }
  .search-content{
    overflow: hidden;
    position: absolute;
    top: 6.375rem;
    left: 0;
    right: 0;
    bottom: 3.125rem;
    background: #fff;
    z-index: 201;
    .search-item{
      line-height: 3.125rem;
      margin-left: .9375rem;
      font-size: .875rem;
      color: #333;
      @include border-1px-bottom(#ededed);
    }
  }
  .NoDataTip{
    height: 78vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    img{
      width: 50%;
    }
    h3{
      margin: .5rem 0;
      color: #999;
      font-size: 1rem;
      font-weight: 400;
    }
    p{
      margin: 0 0 .5rem;
      font-size: .75rem;
      color: #999;
    }
    button{
      min-width: 120px;
      margin-bottom: 1rem;
    }
  }
</style>
