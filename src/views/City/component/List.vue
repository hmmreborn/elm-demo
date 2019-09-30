<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title">当前定位</div>
          <div class="item-list">
            <div class="item">{{this.currentCity}}</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-box"
                 v-for="item of hot"
                 :key="item.id"
                 @click="clickCity(item.name)">
              <div class="button"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area"
             v-for="(item, name) of cities"
             :key="name"
             :ref="name"
        >
          <div class="title">{{name}}</div>
          <div class="item-list">
            <div class="item"
                 v-for="innerItem in item"
                 :key="innerItem.id"
                 @click="clickCity(innerItem.name)"
            >{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    clickCity (city) {
      this.CHANGE_CITY(city)
      this.$router.push('address')
    },
    ...mapMutations(['CHANGE_CITY'])
  },
  updated () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";
  .list{
    overflow: hidden;
    position: absolute;
    top: 6.375rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
      line-height: 2.375rem;
      background: #f5f5f5;
      padding-left: .9375rem;
      color: #666;
      font-size: .875rem;
      @include border-1px-top(#ededed)
    }
    .button-list{
      overflow: hidden;
      padding: .3125rem 1.875rem .3125rem;
      .button-box{
        width: 33.33%;
        float: left;
        .button{
          margin: .3125rem;
          padding: .3125rem 0;
          text-align: center;
          background-color: #f5f5f5;
          border-radius: .125rem;
          color: #666;
          font-size: .875rem;
        }
      }
    }
    .item-list{
      .item{
        line-height: 3.125rem;
        margin-left: 1.875rem;
        font-size: .875rem;
        color: #333;
        @include border-1px-bottom(#ededed);
      }
    }
  }
</style>
