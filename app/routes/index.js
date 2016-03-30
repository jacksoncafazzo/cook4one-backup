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
      var newIngredient = this.store.createRecord('ingredient', params);
      newIngredient.save();
      this.transitionTo('index');
    },

    destroyRental(ingredient) {
      ingredient.destroyRecord();
      this.transitionTo('index');
    }
  }
});
