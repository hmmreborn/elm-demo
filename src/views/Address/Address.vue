<template>
  <div style="height: 100vh;background-color: #f4f4f4">
    <Header/>
    <div class="search">
      <div class="select-city" @click="$router.push('/city')"><span>{{this.currentCity}}</span></div>
      <div class="input-address">
        <span class="iconfont icon-search"></span>
        <input type="text" placeholder="请输入地址"/>
      </div>
    </div>
    <section class="search-info" style="display: none">
      <ul class="result-list">
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
        <li class="result-item">
          <h5><span>上海</span>市</h5>
          <p>上海市徐汇区沪闵路9001号</p>
        </li>
      </ul>
      <div class="not-find">
        <h5>找不到地址？</h5>
        <p>请尝试只输入小区，写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入</p>
      </div>
    </section>
    <section class="positioning">
      <h4>当前定位</h4>
      <div>
        <span>未能获取地址</span>
        <span class="relocation-btn"><i class="iconfont icon-location-current"></i>重新定位</span>
      </div>
    </section>
    <section class="delivery-address">
      <h4>收货地址</h4>
      <ul class="address-list">
        <li class="address-item"
            v-for="item of userAddress"
            :key="item.id"
            @click="handleAddress(item.name)"
        >
          <h5>{{item.name}} <van-tag plain :type="classes[item.type.id]">{{item.type.name}}</van-tag></h5>
          <p>{{item.address}}</p>
          <div><span>{{item.fullname}}（{{item.sex}}）</span><span>{{item.phone}}</span></div>
        </li>
      </ul>
      <div class="add-address">新增地址 <span class="iconfont icon-arrow-right"></span></div>
    </section>
    <section class="NoDataTip" style="display: none">
      <img src="../../assets/img/not-find-gif.gif" alt="">
      <h3>没有搜索结果</h3>
      <p>换个关键字试试</p>
    </section>
  </div>
</template>

<script>
import Header from './component/Header'
import { Tag } from 'vant'
import { mapState, mapActions } from 'vuex'
import 'vant/lib/tag/style'
export default {
  name: 'Address',
  components: {
    Header,
    [Tag.name]: Tag
  },
  data () {
    return {
      classes: ['primary', 'danger', 'warning']
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city',
      userAddress: 'userAddress'
    })
  },
  mounted () {
    this.getUserAddress()
  },
  methods: {
    ...mapActions(['getUserAddress']),
    handleAddress (address) {
      this.$emit('change', address)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixins";
  .search{
    padding-top: 2.875rem;
    display: flex;
    background-color: #fff;
    .select-city{
      position: relative;
      padding-left: .9375rem;
      display: flex;
      align-items: center;
      &:after{
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: 0;
        height: 0;
        margin-top: -2px;
        border-style: solid;
        border-width: 4px 3px 0 3px;
        border-color: #333 transparent transparent transparent;
      }
      span{
        width: 2.5rem;
        padding-right: .625rem;
        @include text-ellipsis;
        font-size: .625rem;
        color: #333;
      }
    }
    .input-address{
      position: relative;
      padding: .625rem .9375rem;
      flex: 1;
      .icon-search{
        position: absolute;
        top: 1.375rem;
        left: 1.375rem;
        font-size: 12px;
        color: #666;
      }
      input[type='text']{
        width: 100%;
        height: 2.25rem;
        padding: .5625rem 1.125rem .5625rem 1.5625rem;
        border-radius: 2px;
        outline: 0;
        border: none;
        background-color: #f2f2f2;
        font-size: .875rem;
        box-sizing: border-box;
      }
    }
  }
  .search-info{
    background-color: #fff;
    .not-find{
      text-align: center;
      padding: 0rem 3rem 3rem;
      color: #999;
      p{
        margin: 0;
        font-size: .625rem;
      }
    }
  }
  .result-item{
    display: flex;
    flex-direction: column;
    padding: .625rem .9375rem;
    @include border-1px-bottom(#e4e4e4);
    h5{
      margin: 0;
      font-size: .9375rem;
      color: #2a2a2a;
      font-weight: 700;
      span{
        color: #999;
      }
    }
    p{
      margin: 0.125rem 0 0;
      font-size: .625rem;
      color: #666;
      font-weight: 400;
    }
  }
  .positioning{
    color: #666;
    >h4{
      padding: .9375rem 0 .625rem .9375rem;
      margin: 0;
      font-size: .625rem;
      font-weight: 400;
    }
    >div{
      padding: 0 .9375rem;
      height: 2.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      background-color: #fff;
      font-size: .9375rem;
      .relocation-btn{
        color: #2395ff;
      }
    }
  }
  .delivery-address{
    margin-top: .625rem;
    margin-bottom: 3.125rem;
    background-color: #fff;
    h4{
      padding: .9375rem 0 .625rem .9375rem;
      margin: 0;
      font-size: .625rem;
      font-weight: 400;
      color: #999;
    }
    .add-address{
      padding:.9375rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: .875rem;
      color: #0085ff;
      span{
        color: #999;
      }
    }
    .address-item{
      padding: .625rem .9375rem .625rem 1.875rem;
      @include border-1px-bottom(#ededed);
      h5{
        margin: 0;
        font-size: .875rem;
        span{
          font-weight: 100;
          font-size: .625rem;
          transform: scale(.8);
        }
      }
      p,div{
        margin: .3125rem 0;
        font-size: .75rem;
      }
      >div{
        color: #999;
      }
    }
  }
  .NoDataTip{
    margin-top: 50%;
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
