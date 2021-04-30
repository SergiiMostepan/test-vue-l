<template>
  <div>
    <p>{{ data.name }}</p>
    <img class="img" :src="data.source" alt="img" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
</style>
