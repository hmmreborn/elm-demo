<template>
    <div class="alphabet">
      <span
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleStartAlphabet"
        @touchmove="handleMoveAlphabet"
        @touchend="handleEndAlphabet"
        @click="handleClickAlphabet"
        :class="[isActive === item ? 'active':'']"
      >{{item}}</span>
    </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
      isActive: null
    }
  },
  updated () {
  },
  methods: {
    handleClickAlphabet (e) {
      this.$emit('change', e.target.innerText)
      // this.isActive = e.target.innerText
    },
    handleStartAlphabet () {
      this.touchStatus = true
    },
    handleMoveAlphabet (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 150
          // console.log('touchY->' + touchY)
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log('index->' + index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            // this.isActive = this.letters[index]
          }
        }, 16)
      }
    },
    handleEndAlphabet () {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped lang="scss">
  .alphabet{
    position: absolute;
    right: .625rem;
    top: 9.375rem;
    color: #999;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: .625rem;
    text-transform: uppercase;
    span{
      width: 1.25rem;
      line-height: 1.25rem;
      text-align: center;
      &.active{
        color: #0085ff;
      }
    }
  }
</style>
