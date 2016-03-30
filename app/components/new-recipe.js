import Ember from 'ember';

export default Ember.Component.extend({
  addNewRecipe: false,
  actions: {
    recipeFormShow() {
      this.set('addNewRecipe', true);
    }
  },
  save1() {
    var params = {
      name: this.get('name'),
      servings: this.get('servings'),
      cook_time: this.get('cook_time'),
      directions: this.get('directions'),
      image: this.get('image'),
    };
    this.set('addNewRecipe', false);
    this.sendAction('saveRecipe2', params);
  }
});
