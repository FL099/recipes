<template>
    <aside :class=this.sidebarVisible>
        <ul >
            <li v-for='item in contents' :key='item'>
                <router-link :to="{ name: 'recipecard', params: { id: item.id }}">{{ item.name }}
                </router-link>
            </li>
        </ul>
        <span >{{ this.sidebarVisible }}</span>
    </aside>
</template>

<script>
// import { Vue } from 'vue-class-component';

export default {
  computed: {
    contents() {
      return this.$store.getters.getItemsList.data;
    },
    sidebarVisible() { return this.$store.state.sidebarVisible === 'inline-block' ? '' : 'hide'; },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables";
@import "../styles/components";

aside {
    background-color: $side-bg;
    color: $side-col !important;
    width: 20%;
    height: 90vh;
    position:fixed;
    top: 60px;
    left: 0;
    z-index: 110;

    ul {
      margin-top: 80px;
      list-style: none;
      padding-left: 20px;
      text-align: left;

      li {
        margin: 0 0 15px 0;
        padding-left: 0;
      }
    }
}

a {
    color: $link-col;
    text-decoration: none;

    &:hover {
        color: $link-col-active;
    }
}
.hide {
    display: none;
}
@media screen and (max-width: 768px) {
    aside {
        width: 100vw;
    }
}
</style>
