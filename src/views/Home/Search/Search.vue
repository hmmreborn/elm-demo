<template>
  <div class="index-search">
    <router-link
      to="/"
      class="search-input">
      <span class="iconfont icon-search"></span>
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/mixins";
  .index-search{
    position: sticky;
    z-index: 999;
    top: 0;
    padding: .625rem .875rem;
    @include bg-linear-gradient(90deg,#0af,#0085ff);
    .search-input{
      width: 100%;
      height:2.25rem ;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      color: #999;
      @include font-size(15px);
      @include border-radius();
      .icon-search{
        @include font-size(14px);
        margin: 4px;
      }
    }
  }
</style>
