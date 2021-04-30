<template>
  <div>
    <p>{{ data.name }}</p>
    <p>{{ data.title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerCard",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
