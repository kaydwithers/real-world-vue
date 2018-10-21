<template>
<div>
  <slot name="heading"></slot>
  <slot name="paragraph"></slot>
</div>
</template>

<script>
export default {
  props: {
    heading: String,
    paragraph: String
  }
}
</script>

<style scoped>
</style>
