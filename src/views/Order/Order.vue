<template>
  <div class="order">
    <section class="NoDataTip"
       :style="{ height:height+'px'}"
    >
      <img src="../../assets/img/not-order-png.png" alt="">
      <p>登录后查看订单</p>
      <van-button type="primary" @click="$router.push('/login')">登录</van-button>
    </section>
    <div class="orderLogin" v-if="!$route.meta.requiresAuth">
      <div class="orderList" v-if="order.length">
        <div class="orderItem"
             v-for="(item, index) of order"
             :key="index"
        >
          <div class="order-box">
            <div class="img"><img :src="item.avatar"></div>
            <div class="content">
              <div class="order-head">
                <div class="title">
                  <div class="name"><span>{{item.name}}</span><i class="iconfont icon-arrow-right"></i></div>
                  <div class="status">{{item.foodDetail.status}}</div>
                </div>
                <p class="time">{{item.foodDetail.useTime}}</p>
              </div>
              <div class="order-detail">
                <div class="desc">{{item.foodDetail.name}}</div>
                <div class="price">¥{{item.truePrice}}</div>
              </div>
            </div>
          </div>
          <div class="order-bottom">
            <van-button plain type="info" size="small">再来一单</van-button>
            <van-button plain type="warning" size="small">评价得金币</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Order',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      height: ''
    }
  },
  computed: {
    ...mapState(['order'])
  },
  created () {
    this.getOrder()
    this.getHeight()
  },
  methods: {
    ...mapActions(['getOrder']),
    getHeight () {
      this.height = window.innerHeight - 50
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixins";
  .order{
    background-color: #f5f5f5;
    margin-bottom: 50px;
    z-index: 0;
    position: relative;
  }
  .orderItem{
    background-color: #fff;
    margin-top: .625rem;
    padding: .875rem 0 0 .9375rem;
  }
  .order-box, .order-bottom{
    display: flex;
  }
  .order-box{
    .img{
      position: relative;
      width: 2rem;
      height: 2rem;
      flex: none;
      padding-right: .625rem;
      img{
        width: 100%;
        height: 100%;
        border-radius: .125rem;
        border: 1px solid #eee;
      }
    }
    .content{
      flex: 1;
      .order-head{
        @include border-1px-bottom(#eee);
        padding: 0 .9375rem .625rem 0;
        .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #333;
          .name{
            display: flex;
            align-items: center;
            font-size: 1rem;
          }
          .name>span{
            max-width: 10em;
            display: inline-block;
            @include text-ellipsis;
          }
          .status{
            text-align: right;
            @include text-ellipsis;
            font-size: .875rem;
          }
        }
        .time{
          margin: 0;
          color: #999;
          font-size: .75rem;
        }
      }
      .order-detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .9375rem 0;
        .desc{
          max-width: 10em;
          @include text-ellipsis;
          font-size: .875rem;
          color: #666;
        }
        .price{
          color: #333;
          font-weight: 700;
          font-size: .875rem;
          padding-right: .9375rem;
        }
      }
    }
  }
  .order-bottom{
    padding: .625rem 1rem;
    @include border-1px-top(#eee);
    justify-content: flex-end;
    button{
      margin-left: .625rem;
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
</style>
