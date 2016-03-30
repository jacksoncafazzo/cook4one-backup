import Ember from 'ember';

export default Ember.Component.extend({
  addNewIngredient: false,
  actions: {
    ingredientFormShow(){
      this.set('addNewIngredient', true);
    },
    save1() {
      var params = {
        measurement: this.get('measurement'),
        units: this.get('units'),
        name: this.get('name'),
        source: this.get('source'),
        recipe: this.get('recipe'),
      };
      this.set('addNewIngredient', false);
      this.sendAction('save2', params);
    }
  } 
});
