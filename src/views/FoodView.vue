<template>
    <div class="look" :style="`--width: ${ computedWidth }`">
      <h1>Recipes collection</h1>
      <RecipeCard v-for="(recipe, index) in recipes.data" :key="index" :recipe="recipe">
      </RecipeCard>
    </div>
</template>

<script>
import RecipeCard from '../components/molecules/RecipeCard.vue';

export default {
  created() {
    return this.$store.dispatch('getItems', { kindOfItem: 'food' });
  },
  computed: {
    recipes() {
      return this.$store.getters.getItemsList;
    },
    computedWidth() { return this.$store.state.sidebarVisible === 'inline-block' ? '80%' : '100%'; },
  },
  components: {
    RecipeCard,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

@media screen and (min-width: 400px) {
  .card {
    --width: 100%;
    width: calc((var(--width) - $std-margin) - $std-margin);
    margin-left: calc((100% - var(--width)) - 5%);
    margin-right: $std-margin;

    &:hover {
      transform: scale(1.01);
    }
  }
}
</style>
