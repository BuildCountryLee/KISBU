<template>
  <div class="button" @click="handleClick">button</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'ls'
    }
  },
  methods: {
    handleClick() {
      this.name = 'ss';
    }
  },
}
</script>

<style>
.button{
  font-size: 12px;
  background-color: red;
}
</style>