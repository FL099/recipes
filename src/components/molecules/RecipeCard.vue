<template>
    <div class="card mb-3" :style="`--width: ${computedWidth}`" :id="recipe.id">
    <div class="row g-0">
      <h3>{{ recipe.name }}</h3>
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start"
      :alt="recipe.altText">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <!-- <h5 class="card-title">{{ recipe.name }}</h5> -->
        <div class="card-text">
            <h4>Ingredients</h4>
            <ul>
                <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                    {{ ingredient.amount }} - {{ ingredient.name }}
                </li>
            </ul>
            <div class="right">
                <h4>Zubereitung</h4>
                <div class="paragraph" v-for="(step,index) in recipe.preparation"
                :key="index">
                  <h6>{{ step.title }}</h6>
                  <p>{{ step.content }}</p> <!-- TODO: statt einzeln: liste von Absätzen-->
                </div>
            </div>
        </div>
        <p class="card-text"><small class="text-muted">Last updated {{ recipe.updated }}</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="js">

export default {
  name: 'RecipeCard',
  props: ['recipe'],
  computed: {
    computedWidth() { return this.$store.state.sidebarVisible === 'inline-block' ? '80%' : '100%'; },
  },
};
</script>

<style scoped>
.card {
  background-color: darkcyan;
}

h3 {
  background-color: white;
  font-weight: bold;
  color: darkcyan;
}

li {
  text-align: start;
  text-overflow: ellipsis;
}

@media screen and (min-width: 768px) {
  .card {
    width: 100%;
    border-radius: 0;
  }
}
</style>
