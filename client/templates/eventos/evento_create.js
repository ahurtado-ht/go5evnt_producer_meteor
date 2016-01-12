Template.eventoCreate.events({
  'click button': function () {
    // send the message to queue
    console.log('send Msg to serverside');

    var msg = {
        'eventoId':1299999181,
        'eventoTipo':'E4',
        'eventoFecha': new Date(),
        'payload': ''
    };
    var callback = new function() {
      console.log('received data from server');
    };

    Meteor.call('notifyEvent', msg, callback);
  }
});
