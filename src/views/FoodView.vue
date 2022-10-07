<template>
    <div>
      <h1>Gongldongl</h1>
        <div v-for="recipe in recipes" :key="recipe.name">
            <div class="left">
                <img alt="{{ recipe.altText }}"/>
                <div class="ingredients" >
                    <ul>
                        <li v-for="ingredient in recipe.zutaten" :key="ingredient.name">
                            {{ ingredient.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="paragraph" v-for="step in recipe.data" :key="step.id"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import { Vue } from 'vue-class-component';

export default {
  created() {
    return this.$store.dispatch('getItems', { kindOfItem: 'food' });
  },
  computed: {
    recipes() { return this.$store.state.displayList.data; },
  },
};
</script>
