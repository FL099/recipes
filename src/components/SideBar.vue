<template>
    <aside :class=this.sidebarVisible>
        <ul >
            <li v-for='item in this.$store.state.dummySubheadingsList' :key='item.htmlId'>
                <router-link :to=item.htmlId>{{ item.name }}</router-link>
            </li>
        </ul>
        <span >{{ this.sidebarVisible }}</span>
    </aside>
</template>

<script>
// import { Vue } from 'vue-class-component';

export default {
  computed: {
    sidebarVisible() { return this.$store.state.sidebarVisible === 'inline-block' ? '' : 'hide'; },
  },
};
</script>

<style scoped>
    aside {
        background-color: #555;
        color: #fff !important;
        width: 20%;
        height: 90vh;
        position:fixed;
        float: left;
        top: 60px;
        left: 0;
    }

    aside ul {
        margin-top: 80px;
        list-style: none;
        padding-left: 0;
    }

    aside ul li {
        margin: 0 0 15px 0;
        padding-left: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
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
