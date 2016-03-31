import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(recipe, params) {
    this.sendAction('update', recipe, params);
    },
    delete(recipe) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.sendAction('destroyRecipe', recipe);
      }
    },
    cook4One3(params) {
      alert('you got to recipe-details!');
      this.sendAction('updateUserIngredients', params);
    }

  }
});
