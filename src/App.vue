<template>
  <div id="app">
    <nav class="menu">
      <router-link class="menu__link" to="/">Go to dynamic components</router-link>
      <router-link class="menu__link" to="/grouping">Go to object grouping</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  &__link {
    &:first-child {
      margin-right: 20px;
    }
  }
}
.router-link-exact-active {
  color: firebrick;
}
</style>
