Eventos = new Mongo.Collection('eventos');

/*
var EventosSchema = new SimpleSchema({
  // EVENT.METADATA -------------------------------------
  // }, metadata : {
  eventoId: {
    type: String,
    label: "eventoId",
    max: 64
  },

  // EVENT.PAYLOAD -------------------------------------

  eventoDesc: {
    type: String,
    label: "Hechos relevantes",
    max: 2000,
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
