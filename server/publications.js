Meteor.publish('eventos', function() {
  return Eventos.find();
});
