Template.eventoCreate.events({
  'click button': function () {
    // send the message to queue
    console.log('send Msg to serverside');
    /*
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
    */
  }
});

AutoForm.addHooks('insertEventoForm', {
  after: {
    insert: function(error, result) {
      if (error) {
        console.log("hook.insert.error", error);
      } else {
        console.log("hook.insert.ok", result);
        // Router.go('showArticle', {_id: result });
      }
    } /*,
    update: function(error, result) {
       console.log("this: " + this._id);
      if (error) {
        console.log("Update Error:", error);
      } else {
        console.log("Document updated: " + result);
        Router.go('showArticle', {_id: result });
      }
    }
    */
  },
  onSuccess: function(formType, result) {
    var self = this;

    console.log('hook.success.ok');
    /*
    var msg = {
        'eventoId':1299999181,
        'eventoTipo':'E4',
        'eventoFecha': new Date(),
        'payload': ''
    };
    */
    var msg = self.insertDoc;
    console.log(msg);
    var callback = new function() {
      console.log('received data from server');
    };

    Meteor.call('notifyEvent', msg, callback);
  },
});
