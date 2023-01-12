<template>
    <h1>Element hinzufügen</h1>
    <form>
      <label for="recipeName" class="row">
        <span class="col-md-2 offset-md-2 col-form-label">Rezeptname</span>
        <div class="col-md-6">
          <input type="text"
          class="form-control" id="recipeName" value="Name">
        </div>
      </label>
      <div class="row">
        <label for="recipePortions" class="col-md-4 offset-md-2 row">
          <span class="col-md-6 col-form-label">Portionen</span>
          <div class="col-md-4">
            <input type="number"
            class="form-control" id="recipePortions" value="1">
          </div>
        </label>
        <label for="recipeId" class="col-md-4 row">
          <span class="col-md-4 col-form-label">Id</span>
          <div class="col-md-8">
            <input type="date"
            class="form-control" id="recipeId" value="1">
          </div>
        </label>
      </div>
      <div class="row">
        <label for="recipePortions" class="col-md-4 offset-md-2 row">
          <span class="col-md-6 col-form-label">Bild</span>
          <div class="col-md-6">
            <input type="text"
            class="form-control" id="recipePortions" value="example.jpg">
          </div>
        </label>
        <label for="recipeId" class="col-md-4 row">
          <span class="col-md-4 col-form-label">Text</span>
          <div class="col-md-8">
            <input type="text"
            class="form-control" id="recipeId" value="Bildbeschreibung">
          </div>
        </label>
      </div>
      <label for="recipeIngredients" class="row">
        <span class="col-md-2 offset-md-2 col-form-label">Rezeptname</span>
        <div class="col-md-6">
          <input type="text"
          class="form-control" id="recipeIngredients" value="1g Zutat1; 2ml Zutat2">
        </div>
      </label>
    </form>
</template>

<script>

export default {
  name: 'AddItemView',
  props: ['kindOfItem'],
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

form {
  width: 70%;
  margin-left: 15%;
  background-color: $bg-base;
  border-radius: $std-br;
  padding: 5px 0;

  label {
    text-align: right;
    margin: 0;

    input {
      padding: 3px 5px !important;
      margin: 3px 0;
    }
  }
}

</style>
