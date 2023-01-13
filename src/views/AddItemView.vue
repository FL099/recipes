<template>
    <h1>Element hinzufügen</h1>
    <form class="px-4 row">
      <div class="col-md-2"></div>
      <label for="recipeName" class="col-md-8">
        <span class="form-label">Rezeptname</span>
          <input type="text"
          class="form-control" id="recipeName" value="Name">
      </label>
      <div class="col-md-2"></div>
      <div class="col-md-2"></div>
      <label for="recipePortions" class="col-md-4 offset-md-2">
        <span class="form-label">Portionen</span>
        <input type="number"
          class="form-control" id="recipePortions" value="1">
      </label>
      <label for="recipeId" class="col-md-4">
        <span class="form-label">Id</span>
        <input type="date"
          class="form-control" id="recipeId" value="1">
      </label>
      <div class="col-md-2"></div>
      <div class="col-md-2"></div>
      <label for="recipePortions" class="col-md-4">
        <span class="form-label">Bild</span>
          <input type="text"
          class="form-control" id="recipePortions" value="example.jpg">
      </label>
      <label for="recipeId" class="col-md-6">
        <span class="col-md-4 col-form-label">Text</span>
        <div class="col-md-8">
          <input type="text"
          class="form-control" id="recipeId" value="Bildbeschreibung">
        </div>
      </label>
      <div class="col-md-2"></div>
      <label for="recipeIngredients" class="col-md-8 offset-md-2" >
        <span class="form-label">Rezeptschritte</span>
          <input type="text"
          class="form-control" id="recipeIngredients" value="1g Zutat1; 2ml Zutat2">
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
    text-align: left;
    margin: 0;

    span {
      color: $col-base;
    }

    input {
      padding: 3px 5px !important;
      margin: 3px 0;
      color: $col-d-cyan;
      font-size: 14px;
    }
  }
}

</style>
