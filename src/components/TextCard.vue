<template>
  <div>
    <p>{{ data.name }}</p>
    <p v-if="data.content">{{ data.content }}</p>
    <p v-if="data.source">{{ data.source }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TextCard",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
