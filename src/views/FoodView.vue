<template>
    <div class="look" :style="`--width: ${computedWidth}`">
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

<style scoped>
@media screen and (min-width: 768px) {
  .card {
    --width: 100%;
    width: var(--width);
    margin-left: calc(100% - var(--width));
  }
}
</style>
