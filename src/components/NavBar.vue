<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-brand" v-on:click="this.$store.commit('toggleSidebar')">
        {{ this.sidebarVisible }}
    </button>
    <router-link to='/about' class=''>About page</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Other pages
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/food">Rezepte</router-link></li>
            <li><router-link to="/add">Hinzufügen</router-link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script lang="js">

export default {
  computed: {
    sidebarVisible() { return this.$store.state.sidebarVisible === 'inline-block' ? '<<|' : '>>|'; },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

  nav {
    position: sticky;
    top: 0 ;
    z-index: 111;
  }

  .navbar-brand {
    font-weight: bold;
    border: 2px solid darkcyan ;
    border-left: 0px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: $bg-base;
    user-select: none;
  }

  li a{
    text-decoration: none;
    font-weight: 400;
    padding: 7px 14px;
    width: 100%;
    display: block;
  }
  li a:hover {
    font-weight: bold;
    background-color: lightgrey;
  }
</style>
