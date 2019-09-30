<template>
  <div>
    <Header/>
    <Search :cities="cities"></Search>
    <List :cities="cities" :hot="hotCities" :letter="letter"></List>
    <Alphabet :cities="cities" @change="handleAlphabet"></Alphabet>
  </div>
</template>

<script>
import Header from './component/Header'
import Search from './component/Search'
import Alphabet from './component/Alphabet'
import List from './component/List'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'City',
  components: {
    Header,
    Search,
    Alphabet,
    List
  },
  data () {
    return {
      letter: ''
    }
  },
  computed: {
    ...mapState(['cities', 'hotCities'])
  },
  mounted () {
    this.getCitity()
  },
  methods: {
    ...mapActions(['getCitity']),
    handleAlphabet (alphabet) {
      this.letter = alphabet
    }
  }
}
</script>

<style scoped lang="scss">
</style>
