<template>
  <div class="index-location">
    <div class="text" @click="$router.push('/address')"><span class="iconfont icon-location"></span><span class="title">上海观山汽车销售服务有限公司</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
@import "../../../assets/styles/mixins";
.index-location{
  padding: .625rem .875rem;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  color: #fff;
  .text{
    display: flex;
    align-items: center;
    width: 60%;
    .title{
      @include text-ellipsis;
      position: relative;
      margin-left: 4px;
      &::after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -2px;
        border-style: solid;
        border-width: 4px 4px 0 4px;
        border-color: #fff transparent transparent transparent;
      }
    }
  }
}
</style>
