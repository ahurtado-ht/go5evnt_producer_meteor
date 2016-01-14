Eventos = new Mongo.Collection('eventos');


var EventosSchema = new SimpleSchema({
  // EVENT.METADATA -------------------------------------
  // }, metadata : {
  eventoId: {
    type: Number,
    label: "eventoId",
    min: 0
  },
  eventoTipo: {
    type: String,
    label: "eventoTipo",
    max: 24,
    optional: true,
    allowedValues: ['E4', 'E3', 'E2', 'E1'],
    autoform: {
      options: [
        {label: "E4:RedencionRealizada", value: "E4"},
        {label: "E3:TransferenciaEmpresarioRealizada", value: "E3"},
        {label: "E2:TransferenciaAgregadorRealizada", value: "E2"},
        {label: "E1:EmisionCompletada", value: "E1"}
      ]
    }
  },
  eventoFecha: {
    type: Date,
    label: "eventoFecha",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }

  },
  eventoDireccionIp: {
    type: String,
    label: "eventoDireccionIp",
    max: 64,
    optional: true
  },
  eventoCanal: {
    type: String,
    label: "eventoCanal",
    max: 64,
    optional: true
  },
  eventoRespNroConfirmacion: {
    type: String,
    label: "eventoRespNroConfirmacion",
    max: 64,
    optional: true
  },
  eventoRespCod: {
    type: String,
    label: "eventoRespCod",
    max: 64,
    optional: true
  },
  eventoRespDescripcion: {
    type: String,
    label: "eventoRespDescripcion",
    max: 64,
    optional: true
  },

  // EVENT.PAYLOAD -------------------------------------

  comercioCod: {
    type: String,
    label: "comercioCod",
    max: 24,
    optional: true
  },
  cajaId: {
    type: String,
    label: "cajaId",
    max: 24,
    optional: true
  },
  txOrigenCuenta: {
    type: String,
    label: "txOrigenCuenta",
    max: 24,
    optional: true
  },
  txDestinoCuenta: {
    type: String,
    label: "txDestinoCuenta",
    max: 24,
    optional: true
  },
  cajeroId: {
    type: String,
    label: "cajeroId",
    max: 24,
    optional: true
  },
  bonoSerial: {
    type: String,
    label: "bonoSerial",
    max: 24,
    optional: true
  },
  bonoEspecieCod : {
    type: String,
    label: "bonoEspecieCod",
    max: 24,
    optional: true
  },
  bonoEmisorCod : {
    type: String,
    label: "bonoEmisorCod",
    max: 24,
    optional: true
  },
  bonoEspecieVer : {
    type: String,
    label: "bonoEspecieVer",
    max: 24,
    optional: true
  },
  bonoEstado : {
    type: String,
    label: "bonoEstado",
    max: 24,
    optional: true
  },
  bonoValor : {
    type: Number,
    label: "bonoValor",
    min: 0,
    optional: true
  },
  bonoDenominacion : {
    type: String,
    label: "bonoDenominacion",
    max: 128,
    optional: true
  },
  bonoFechaVencimiento: {
    type: Date,
    label: "bonoFechaVencimiento",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  }

});

Eventos.attachSchema( EventosSchema );

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
