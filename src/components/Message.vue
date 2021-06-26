<template>
  <div>
    <span>{{count}}</span>
    <button data-testid="btn1" @click="handleClick">click</button>
  </div>
</template>

<script>
  export default {
    prop:["msg"],
    data() {
      return {
        count: 0
      }
    },
    methods: {
      handleClick() {
        this.count++;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>