<template>
  <div class="Recommend">
    <div class="quality-package">
      <div class="content">
        <div class="flex-container">
          <div class="flex-item">
            <h2>品质套餐</h2>
            <p>搭配齐全吃得好</p>
            <a href="">立即抢购></a>
          </div>
          <div class="flex-item"><img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" alt=""></div>
        </div>
      </div>
      <div class="quality-vip">
        <div class="vvip">
          <img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" alt="">
          <em>超级会员</em>
          <span>每月领20元红包</span>
        </div>
        <div class="opening"><a href="">立即开通></a></div>
      </div>
    </div>
    <div class="recommend-container">
      <div class="class-title">推荐商家</div>
      <div class="recommend-filter">
        <ul class="filter-header">
          <li
            :class="activeClass == index ?  'active' : ''"
              v-for="(item, index) of itemList"
              :key="index"
            @click="getItmeClass(index)"
          >{{item.text}}</li>
        </ul>
      </div>
      <section class="shop-list" v-if="list.length">
        <ul class="shop-list">
          <li class="shop-item"
              v-for="item of list"
              :key="item.id"
          >
            <div class="shop-content">
              <div class="img"><img :src="item.avatar"></div>
              <div class="shop-box">
                <h2 class="shop-name">{{item.name}}</h2>
                <div class="shop-model">
                  <div class="shop-score">
                    <Star :score="item.score" :size="24"/>
                    <span>&nbsp;{{item.score}}&ensp;</span>
                    <span>月售{{item.sellCount}}单</span>
                  </div>
                  <div class="mode" :style="{backgroundColor: '#' + item.delivery_mode.color}">{{item.delivery_mode.text}}</div>
                </div>
                <div class="shop-delivery">
                  <div class="moneylimit">
                    <span>¥{{item.moneylimit}}起送</span>
                    <span>配送费¥{{item.deliveryFee}}</span>
                  </div>
                  <div class="timedistance">
                    <span>{{item.deliveryDistance}}</span>
                    <span>{{item.deliveryTime}}分钟</span>
                  </div>
                </div>
                <div class="shop-activities">
                    <ul class="activity-list"
                        :class="isActive == item.id ? 'active': ''"
                        >
                      <li
                        v-for="(activity, index) of item.activities"
                        :key="index"
                      >
                        <span class="type" :style="{backgroundColor: '#'+ activity.icon_color}">{{activity.icon_name}}</span>
                        <span class="desc">&ensp;{{activity.description}}</span>
                      </li>
                    </ul>
                  <div class="activity-count"
                       :class="isActive == item.id ? 'active': ''"
                       @click="toggleClass(item.id)">{{item.activities.length}}个活动</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="NoDataTip" v-else>
        <img src="../../../assets/img/not-order-png.png" alt="">
        <h3>没有结果</h3>
        <p>登录后查看更多商家</p>
        <van-button type="primary" @click="$router.push('/login')">登录</van-button>
      </section>
    </div>
  </div>
</template>

<script>
import { Button, Loading } from 'vant'
import Star from '../../../components/Star/Star'
import 'vant/lib/button/style'
import 'vant/lib/loading/style'
export default {
  name: 'Recommend',
  props: {
    list: Array
  },
  components: {
    [Button.name]: Button,
    [Loading.name]: Loading,
    Star
  },
  data () {
    return {
      activeClass: 0,
      isActive: false,
      itemList: [
        { text: '综合排序' },
        { text: '距离最近' },
        { text: '品质联盟' },
        { text: '筛选' }
      ]
    }
  },
  methods: {
    getItmeClass (index) {
      this.activeClass = index
    },
    toggleClass (index) {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = index
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";
  .loading{text-align: center}
  .quality-package{
    background-image: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
    margin: .625rem;
    .content{
      padding:.75rem 0 0 .875rem;
    }
    .flex-container{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .flex-item{
        h2{
          margin: 0;
          padding: 0;
          font-size: 1rem;
          color: #333;}
        p{
          font-size: .75rem;
          color: #999;
          margin: .5rem 0;
        }
        a{
          color: #af8260;font-size: .75rem;
        }
        img{max-width: 100%;width: 8.5rem}
      }
    }
  }
  .quality-vip{
    padding:.75rem 0 .5rem .875rem;
    background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
    color: #644f1b;
    font-size: .75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .vvip{
      display: flex;
      align-items: center;
    }
    img,em,span{display: inline-block;margin-right: .5rem}
    span{
      position: relative;
      margin-left: .5rem;
      &::before{
        content: '';
        position: absolute;
        left: -.5rem;
        top: 50%;
        width: 2px;
        height: 2px;
        background-color: #644f1b;
        border-radius: 50%;
      }
    }
    img{width: 1rem}
    em{font-style: normal;font-weight: 700;font-size: .875rem}
    .opening{transform: scale(.8)}
    a{ color: #644f1b;}
  }
  .class-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    height: 2.25rem;
    &::after,&::before{
      content: '';
      display: block;
      width: 2rem;
      height: .125rem;
      background-color: #ccc;
    }
    &::after{
      margin-left: .5rem;
    }
    &::before{
      margin-right: .5rem;
    }
  }
  .recommend-filter{
    position: sticky;
    top: 1.333rem;
    z-index: 100;
  }
  .filter-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .875rem;
    color: #999;
    >li{
      position: relative;
      line-height: 3;
      .icon-sort-desc{
        position: absolute;
        right: -14px;
        top: 0;
        transform: scale(.5);
      }
      .icon-filter{
        position: absolute;
        top: 2px;
        right: -17px;
        transform: scale(.9);
      }
    }
    .active{
      color: #333;
      font-weight: 700;
    }
  }
  .NoDataTip{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
  .shop-item{
    padding: .625rem 0;
    @include border-1px-bottom(#e4e4e4);
    .shop-content{
      padding: 0 .625rem;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      .img{
        width: 20vw;
        height: 20vw;
        img{max-width: 100%; width: 100%}
      }
      .shop-box{
        padding-left: .625rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-grow: 1;
      }
      .shop-name{
        margin: 0;
        font-size: .9375rem;
        color: #333;
      }
      .shop-model{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .mode{color: #fff;font-size: .5em;border-radius: .125em;@include bg-linear-gradient(45deg,#0085ff,#0af);padding: .125em;transform: scale(.8)}
      }
      .shop-score{
        display: flex;
        align-items: center;
        color: #666;
        font-size: .75em;
        line-height: 2;
      }
      .shop-delivery,.shop-activities{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .75em;
        line-height: 2;
        color: #666;
      }
      .shop-activities{
        align-items: flex-start;
        .type{
          width: 1.5rem;
          height: 1.5rem;
          color: #fff;
          font-size: .85rem;
          border-radius: .2em;
          transform: scale(0.65);
          text-align: center;
          transform-origin: left;
        }
        .desc{
          display: inline-block;
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
        }
        .activity-list{
          flex: 1;
          padding-right: .875rem;
          width: 50vw;
          height: 48px;
          overflow: hidden;
          &.active{
            height: auto;
          }
          li{
            display: flex;
            align-items: center;
          }
        }
        .activity-count{
          padding-right: 1.05rem;
          position: relative;
          color: #999;
          &::after{
            content: '';
            position: absolute;
            top: .625rem;
            right: 0;
            border-style: solid;
            border-width: 4px 4px 0px 4px;
            border-color: #999 transparent transparent transparent;
            transition: all .2s linear;
          }
          &.active::after{
            transform: rotate(180deg);
          }
        }
      }
      .moneylimit span+span:before,.timedistance span+span:before {
        margin: 0 .017067rem;
        margin: 0 .170667vw;
        margin: 0 .08rem;
        margin: 0 .8vw;
        color: #ddd;
        content: "|";
      }
    }
  }
</style>
