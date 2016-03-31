import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cook4one1(recipe) {
      var userServings = this.get('user-servings');
      var recipeServings = this.get('recipe.servings');
      var params = [];
      this.get(recipe.ingredients).forEach(function(ingredient) {
        var newMeasurement = (ingredient.measurement / recipeServings) * userServings;
        params.push({
          measurement: newMeasurement,
          units: ingredient.units,
          name: ingredient.name,
          source: ingredient.source,
          recipe: ingredient.recipe
        });
      });
      console.log(params);
      this.sendAction('cook4one2', params);






      // ingredients.forEach(function(ingredient) {
      // ingredient.measurement = (ingredient.measurement / ingredient.servings) * userServings;
      // console.log(ingredient.measurement);
      // });
      // recipe.ingredients = ingredients;
      // recipe.servings = userServings;

    }
  }
});
