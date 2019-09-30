<template>
  <div class="login">
    <van-cell>
      <div class="logo">
        <img src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">
      </div>
    </van-cell>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-cell>
      <van-button type="info" block>登录</van-button>
    </van-cell>
  </div>
</template>

<script>
import { Field, Cell, CellGroup, Button } from 'vant'
import 'vant/lib/field/style'
export default {
  name: 'Login',
  components: {
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/mixins";
  .logo{
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      height: 3.5rem;
    }
  }
</style>
