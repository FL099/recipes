<template>
  <div class="card mb-3" :style="`--width: ${computedWidth}`" :id="recipe.id">
    <div class="row g-0">
      <h3>{{ recipe.name }}</h3>
      <div class="card-body">
        <div class="card-text row">
          <div class="col-md-7 img-sec" :style="{backgroundImage:
            'url('+ require(`../../../public/img/${ recipe.img }`)+')'}">
            <div class="offset-md-7 col-md-5 ingredients">
              <h4>Zutaten</h4>
              <ul>
                  <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                      {{ ingredient.amount * ( this.portions / recipe.portions ) }}
                      {{ ingredient.unit }} - {{ ingredient.name }}
                  </li>
              </ul>
              <form class="mb-3 row">
                <label for="staticEmail" class="col-form-label">
                  <input type="number" class="col-sm-5 form-control-plaintext"
                  id="staticEmail" v-model="this.portions"
                  min="1" max="99">
                  <div class="amm-label" v-if="recipe.portions == 1">
                    Portion
                  </div>
                  <div class="amm-label" v-else>
                    Portionen
                  </div>
                </label>
              </form>

            </div>
          </div>
          <div class="right col-md-5">
            <div class="paragraph" v-for="(step,index) in recipe.preparation"
            :key="index">
              <h4>{{ step.title }}</h4>
              <p>{{ step.content }}</p>
            </div>
            <div class="add-info">
              <span class="badge bg-secondary" v-for="(category, index) in recipe.categories"
              :key="index">
                {{ category }}
              </span>
            </div>
            <p class="card-text">
              <small class="text-muted">Last updated {{ recipe.updated }}</small>
            </p>
          </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'RecipeCard',
  props: ['recipe'],
  computed: {
    computedWidth() { return this.$store.state.sidebarVisible === 'inline-block' ? '70%' : '90%'; },
  },
  methods: {},
  data() {
    return {
      portions: this.recipe.portions,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";
@import "../../styles/_components.scss";

.card {
  border: 3px solid $bg-base;
  border-radius: 5px;
  background-color: $card-bg;

  .card-body {
    padding-left: 12px;
    padding-bottom: 0px;
    padding-top: 0;
    border-bottom-left-radius: $std-br;

    .add-info {
      text-align: left;

      .badge {
        margin-right: 5px;
      }
    }
  }
}

h3 {
  font-weight: bold;
  color: darkcyan;
  margin: 15px 0;
}

h4 {
  color: $col-base;
  text-align: left;
}

.ingredients{
  background-color: rgba($color: $col-muted, $alpha: 0.7);
  padding: $std-pad;
  border-top-left-radius: $std-br;
  margin-top: 15px;
  backdrop-filter: blur(3px);

  h4 {
    color: $col-sec;
    opacity: 1;
  }
}

h6 {
  text-align: left;
  font-weight: bold;
}

ul {
  padding-left: 14px;
  opacity: 1;

  li {
    text-align: start;
    text-overflow: ellipsis;
    color: $col-ter;
  }
}

form {
  margin: 0;

  label {
    padding: 0;
    text-align: left;
    .amm-label {
      display: inline-block;
      width: 70%;
      text-align: left;
      padding-left: 5px;
    }

    input {
      width: 45px;
      display: inline-block;
      border-bottom: 2px solid $col-ter;
    }
  }
}

.img-sec {
  background-color: $col-base;
  padding-right: 0px;
  border-bottom-left-radius: $std-br;
  background-size: cover;
}

p {
  text-align: justify;
}

small {
  font-size: 0.8em;
}

@media screen and (min-width: 768px) {
  .card {
    width: 100%;
    border-radius: 5px;
    border: none;
  }
}
</style>
