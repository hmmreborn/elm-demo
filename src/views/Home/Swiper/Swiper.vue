<template>
  <div class="index-swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide
        v-for="(icon, index) in pages"
        :key="index"
      >
        <a href="javascript:;"
           class="icon"
           v-for="item in icon"
           :key="item.id"
        >
          <div class="img"><img :src="item.icon" class="icon-img"></div>
          <p class="text">{{item.text}}</p>
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  props: {
    list: Array
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    },
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style>
  .swiper-pagination-bullet{
    border-radius: 0;
    width: 9px;
    height: 2px;
  }
  .swiper-pagination-bullet-active{
    background-color: #fe7100;
  }
</style>
<style scoped lang="scss">
  @import "../../../assets/styles/mixins";
  .index-swiper{
    height: 0;
    padding-bottom: 44%;
  }
  .swiper-container{
    padding-bottom: 15px;
  }
  .swiper-pagination{
    bottom: 0px;
  }
  .icon{
    position: relative;
    overflow: hidden;
    width: 20%;
    height: 0;
    float: left;
    padding-bottom: 20%;
    display: block;
    color: #666;
    font-size: .875rem;
    text-align: center;
    .img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .625rem;
      box-sizing: border-box;
      padding: .625rem;
      .icon-img{
        display: block;
        margin: 0 auto;
        height: 100%;

      }
    }
    .text{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1.25rem;
      margin: 0;
      line-height: 1.25rem;
      color:#666;
      font-size: .75rem;
      text-align: center;
      @include text-ellipsis
    }
  }
</style>
