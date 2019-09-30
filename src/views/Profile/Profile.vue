<template>
    <div class="profile" style="height: 100vh;background-color: #f4f4f4">
      <div class="profile-head">
        <div class="avatar-box">
          <div class="avatar"><i class="iconfont icon-eliaomo"></i></div>
          <div class="avatar-info">
            <h2 class="name"><span>登录/注册</span><span v-show="$route.meta.requiresAuth">Miao_Hu</span></h2>
            <p class="phone"><i class="iconfont icon-phone"></i><span>登录后享受更多特权</span><span v-show="$route.meta.requiresAuth">182****0179</span></p>
          </div>
        </div>
        <i class="iconfont icon-arrow-right"></i>
      </div>
      <ul class="profile-discount">
        <li>
          <p class="amount"><em>15</em>个</p>
          <p class="desc">红包</p>
        </li>
        <li>
          <p class="amount"><em>0</em>个</p>
          <p class="desc">金币</p>
        </li>
      </ul>
      <div class="profile-item">
        <div class="item">
          <div class="item-info">
            <i class="iconfont icon-location" style="color: #0af "></i>
            <p>我的地址</p>
          </div>
          <div><span class="iconfont icon-arrow-right"></span></div>
        </div>
      </div>
      <div class="profile-item">
        <div class="item">
          <div class="item-info">
            <i class="iconfont icon-shop" style="color: #07c160"></i>
            <p>金币商城</p>
          </div>
          <div><span class="iconfont icon-arrow-right"></span></div>
        </div>
        <div class="item">
          <div class="item-info">
            <i class="iconfont icon-gift" style="color:#ee0a24;"></i>
            <p>分享拿20元现金</p>
          </div>
          <div><span class="iconfont icon-arrow-right"></span></div>
        </div>
      </div>
      <div class="profile-item">
        <div class="item">
          <div class="item-info">
            <i class="iconfont icon-service" style="color:#0af;"></i>
            <p>我的客服</p>
          </div>
          <div><span class="iconfont icon-arrow-right"></span></div>
        </div>
        <div class="item">
          <div class="item-info">
            <i class="iconfont icon-eliaomo" style="color:#0af;"></i>
            <p>下载饿了么</p>
          </div>
          <div><span class="iconfont icon-arrow-right"></span></div>
        </div>
        <div class="item">
          <div class="item-info">
            <i class="iconfont icon-help" style="color:#0af;"></i>
            <p>规则中心</p>
          </div>
          <div><span class="iconfont icon-arrow-right"></span></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixins";
  .profile{
    background-color: #ededed;
  }
  .profile-head{
    padding: 1.25rem .9375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    @include bg-linear-gradient(90deg, #0af, #0085ff);
    .avatar-box{
      width: 100%;
      display: flex;
      align-items: center;
    }
    .avatar{
      width: 3.75rem;
      height: 3.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255,255,255,.2);
      border-radius: 50%;
      text-align: center;
      .icon-eliaomo{
        font-size: 2rem;
      }
    }
    .avatar-info{
      margin-left: .9375rem;
      flex-grow: 1;
      .name{
        margin: 0 0 .5rem 0;
        font-weight: 700;
        font-size: 1.3125rem;
        @include text-ellipsis;
      }
      .phone{
        margin: 0;
        font-size: .75rem;
      }
    }
  }
  .profile-discount{
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    background-color: #fff;
    li{
      flex: 1 1 auto;
      &:first-child{
        color: #ff5f3e;
        border-right: 1px solid #ededed;
      }
      &:last-child{
        color: #6ac20b;
      }
      .desc{
        margin: 0;
        padding-bottom: .9375rem;
        font-size: .625rem;
        font-weight: 700;
        color: #666;
      }
      .amount{
        margin-bottom: 0  ;
        font-size: .75rem;
        em{
          font-style: normal;
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
    }
  }
  .profile-item{
    margin-top: .625rem;
    padding: 0  .9375rem;
    background-color: #fff;
    .item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #333;
      .icon-arrow-right{
        color: #999;
      }
      .item-info{
        display: flex;
        align-items: center;
        flex: 1;
        p{
          margin:.3125rem 0 .3125rem .625rem;
          line-height: 2.5;
          flex: 1;
          @include border-1px-bottom(#ededed)
        }
      }
      &:last-child{
        .item-info{
          p{
            @include border-1px-bottom(#fff)
          }
        }
      }
    }
  }
</style>
