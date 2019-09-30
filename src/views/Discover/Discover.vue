<template>
  <div class="discover">
    <div class="discover-head">
      <div class="left">
        <div class="title">
          <h3>金币商城</h3>
          <p>0元好物在这里</p>
        </div>
        <div class="icon"><img src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp" alt=""></div>
      </div>
      <div class="right">
        <div class="entry">
          <div class="title">
            <h3>推荐有奖</h3>
            <p>20元现金拿不停</p>
          </div>
          <img src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp" alt="">
        </div>
        <div class="entry">
          <div class="title">
            <h3>周边优惠</h3>
            <p>领券口碑好券</p>
          </div>
          <img src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp" alt="">
        </div>
      </div>
    </div>
    <div class="discover-recommend">
      <div class="activity-divider"><span class="line"></span><span>为你推荐</span><span class="line"></span></div>
      <p class="activity-sub-title">你的口味，我都懂得</p>
      <div>
        <van-grid
          :column-num="2"
          :gutter="10"
        >
          <van-grid-item
            v-for="item of foods"
            :key="item.id"
          >
            <div class="discover-item">
              <div class="img"><img :src="item.image_path" alt="" width="100%"></div>
              <h4 class="name">{{item.name}}</h4>
              <div class="rating">月售{{item.satisfy_count}}份好评率{{item.satisfy_rate}}%</div>
              <div class="price">
                <i>￥</i>
                <span>{{item.price}}</span>
                <del>￥{{item.price}}</del>
              </div>
              <div class="address"><span class="iconfont icon-store"></span>浏阳蒸菜（银都西路）</div>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="discover-discount">
      <div class="activity-divider"><span class="line"></span><span>限时好礼</span><span class="line"></span></div>
      <p class="activity-sub-title">金币换豪礼</p>
      <ul class="activity-body">
        <li class="activity-item"
            v-for="item of activities"
            :key="item.id"
        >
          <span class="discount">{{item.corner_marker}}</span>
          <img :src="item.image_hash" alt="">
          <p class="title">{{item.title}}</p>
          <div class="price"><span>{{item.points_required}}金币</span><del>￥{{item.original_price}}</del></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import 'vant/lib/grid/style'
import 'vant/lib/grid-item/style'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Discover',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data () {
    return {
      activities: [
        {
          id: 1,
          corner_marker: '限时优惠',
          image_hash: 'https://cube.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?x-oss-process=image/format,webp',
          original_price: 3,
          points_required: 90,
          title: '3元品质联盟红包',
          url: 'https://h5.ele.me/exchange/?dbredirect=https%3A%2F%2Factivity.m.duiba.com.cn%2Fmobile%2FappItemDetail%3FappItemId%3D1900411%26dbnewopen'
        },
        {
          id: 2,
          corner_marker: '限时优惠',
          image_hash: 'https://cube.elemecdn.com/e/ad/5c791baf56778ee51cb7e4c8cf240jpeg.jpeg?x-oss-process=image/format,webp',
          original_price: 6,
          points_required: 180,
          title: '6元品质联盟红包',
          url: 'https://h5.ele.me/exchange/?dbredirect=https%3A%2F%2Factivity.m.duiba.com.cn%2Fmobile%2FappItemDetail%3FappItemId%3D1900412%26dbnewopen'
        },
        {
          id: 3,
          corner_marker: '限时优惠',
          image_hash: 'https://cube.elemecdn.com/9/a6/840600d13c1a1ef2e15343f3f759fjpeg.jpeg?x-oss-process=image/format,webp',
          original_price: 15,
          points_required: 450,
          title: '15元品质联盟红包',
          url: 'https://h5.ele.me/exchange/?dbredirect=https%3A%2F%2Factivity.m.duiba.com.cn%2Fmobile%2FappItemDetail%3FappItemId%3D1888503%26dbnewopen'
        }
      ]
    }
  },
  computed: {
    ...mapState(['foods'])
  },
  mounted () {
    this.getFoods()
  },
  methods: {
    ...mapActions(['getFoods'])
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixins";
  .discover{margin-bottom: 50px;background-color: #ededed}
  .discover-head,.discover-recommend,.discover-discount{
    background-color: #fff;
    margin-bottom: .625rem;
  }
  .discover-head{
    display: flex;
    justify-content: space-between;
    .left,.right{
      flex: 1;
    }
    .left{
      padding: .9375rem;
      display: flex;
      border-right: 1px solid #ededed;
      .icon{
        align-self: flex-end;
      }
      h3{
        margin: 0;
        color: #ff9900;
        font-size: 1rem;
        font-weight: 200;
      }
      p{
        margin: 0;
        color: #999;
        font-size: .625rem;
      }
      img{
        width: 4.625rem;
      }
    }
    .entry{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .75rem .9375rem;
      @include border-1px-bottom(#ededed);
      &:first-child{
        h3{
          color: #1ba9e1;
        }
      }
      &:last-child{
        h3{
          color: #ed6660;
        }
      }
      img{
        width: 2.8125rem;
        height: 2.8125rem;
      }
      h3{
        margin: 0;
        font-size: 1rem;
        font-weight: 200;
      }
      p{
        margin: 0;
        color: #999;
        font-size: .625rem;
      }
    }
  }
  .discover {
    /deep/ .van-grid-item__content {
      padding: 0;
    }
  }
  .activity-divider{
    padding-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    .line{
      display: inline-block;
      margin: .75rem;
      @include border-1px-top(#000);
      width: 2rem;
      height: 0;
      &:first-child{
        &::after{
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 6px;
          height: 6px;
          margin-top: -3px;
          border-radius: 50%;
          background-color: #000;
        }
      }
      &:last-child{
        &::after{
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 6px;
          height: 6px;
          margin-top: -3px;
          border-radius: 50%;
          background-color: #000;
        }
      }
    }
  }
  .activity-sub-title{
    margin: 0;
    padding-bottom: 1.5rem;
    font-size: .625rem;
    color: #999;
    text-align: center;
    transform: scale(.8);
  }
  .discover-item{
    width: 100%;
    display: flex;
    flex-direction: column;
    .img{
      width: 100%;
    }
    .name{
      margin: 0;
    }
    .rating{
      font-size: .625rem;
      color: #999;
    }
    .price{
      color: #ff6000;
      border-bottom: 1px dotted #eee;
      i{
        font-style: normal;
        font-size: .625rem;
      }
      del{
        font-size: .625rem;
        color: #999;
      }
      span{
        font-weight: 700;
      }
    }
    .address{
      padding: .625rem 0;
      font-size: .625rem;
      color: #999;
      span{
        font-size: .625rem;
        display: inline-block;
        margin-right: .25rem;
      }
    }
  }
  .activity-body{
    display: flex;
    .activity-item{
      padding: .625rem;
      flex: 1;
      .discount{
        padding: .125rem;
        display: inline-block;
        background-color: #333;
        color: #fff;
        font-size: .625rem;
      }
      img{
        width: 100%;
      }
      .title{
        margin-top: 0;
        margin-bottom: .3125rem;
        font-size: .75rem;
        color: #666;
      }
      .price{
        span{
          color: #ff5339;
          font-size: .8125rem;
        }
        del{
          font-size: .625rem;
          color: #999;
          transform: scale(.5);
        }
      }
    }
  }
</style>
