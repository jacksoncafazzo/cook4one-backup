import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    cook4One(recipe) {
      console.log(recipe);
    }
  }
});
