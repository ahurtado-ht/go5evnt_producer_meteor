Template.eventoCreate.events({
  'click button': function () {
    // send the message to queue
    console.log('ui.clickEvnt');

  }
});

Template.eventoCreate.rendered = function() {
  Meteor.call('getNextId', "eventosSeq", function(error, result){
    if(!error) {
      Session.set('getNextId.result', result );
    } else {
      console.log('error-getNExtId' + error);
    }
  });
}


Template.eventoCreate.helpers({
  defaultValues: function () { // sync call
    // set Session variable in method callback
    var nextId = Session.get('getNextId.result');;
    var userId = Meteor.user().username.toUpperCase();

    // var nextId = Session.get('getNextIdResult');//Meteor.apply('getNextId', 'eventosSeq', { returnStubValue: true } );

    return {
      eventoFecha: new Date(),
      eventoId: nextId,
      eventoDireccionIp: "127.0.0.1",
      eventoCanal: "APPMOVIL",
      eventoRespNroConfirmacion: (500000 + nextId),
      eventoRespCod: "EVT_OK",
      eventoRespDescripcion: "transaccion al peluche",
      comercioCod: "0054",
      cajaId: "CAJA_" + userId,
      cajeroId: userId,
      bonoSerial: "" + (800000 + nextId),
      bonoEstado: "ACTIVO",
      bonoValor: 20000,
      bonoFechaVencimiento: moment().add(7, 'days').toDate()
    };
  }
});

AutoForm.addHooks('insertEventoForm', {

  onSuccess: function(formType, result) {
    var self = this;
    var msg = self.insertDoc; // { 'eventoId':1299999181, 'eventoTipo':'E4', 'eventoFecha': new Date()};
    // console.log(msg);
    var callback = new function() {
      console.log('received data from server');
    };

    Meteor.call('notifyEvent', msg, callback);
  },
});
