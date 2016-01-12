Eventos = new Mongo.Collection('eventos');

/*
var EventosSchema = new SimpleSchema({
  // EVENT.METADATA -------------------------------------
  // }, metadata : {
  eventoId: {
    type: String,
    label: "eventoId",
    max: 128
  },
  eventoTipo: {
    type: String,
    label: "eventoTipo",
    max: 24,
    optional: true
  },

  eventoFecha: {
    type: String,
    label: "eventoFecha",
    max: 128,
    optional: true
  },
  eventoDireccionIp: {
    type: String,
    label: "eventoDireccionIp",
    max: 64,
    optional: true
  },



  // EVENT.PAYLOAD -------------------------------------

  comercioCod: {
    type: String,
    label: "comercioCod",
    max: 24,
    optional: true
  }
});

Eventos.attachSchema( EventosSchema );
*/

Eventos.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  remove: function (userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
