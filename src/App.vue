<template>
  <SideBar></SideBar>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

@Options({
  components: {
    NavBar,
    SideBar,
  },
})
export default class App extends Vue {
}

</script>

<style lang="scss">
@import "styles/_variables.scss";

* {
  color: $col-base;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $col-d-blue;
  background-color: $canvas;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $link-col;

    &.router-link-exact-active {
      color: $link-col-active;
    }

    &:hover {
      color: $link-col-active;
    }
  }
}

.text-muted {
  color: $col-muted !important;
}
</style>
