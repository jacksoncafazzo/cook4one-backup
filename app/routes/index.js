import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      recipes: this.store.findAll('recipe'),
      ingredients: this.store.findAll('ingredient')
    });
  },
  actions: {
    save3(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      this.transitionTo('index');
    },

    destroyIngredient(ingredient) {
      ingredient.destroyRecord();
      this.transitionTo('index');
    },
    destroyRecipe(recipe) {
      recipe.destroyRecord();
      this.transitionTo('index');
    },
    update(recipe, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          recipe.set(key,params[key]);
        }
      });
      recipe.save();
      this.transitionTo('index');
    },
  }
});
