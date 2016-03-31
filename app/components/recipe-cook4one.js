import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cook4one1(recipe) {
      var userServings = this.get('user-servings');

      console.log(userServings);
      this.sendAction('cook4One2', recipe, userServings);
    }
  }
});
