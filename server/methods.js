Meteor.methods({
    'notifyEvent': function notifyEvent(msg, callback) {
      console.log('method:notifyEvent' + msg);

      var kafka = Meteor.npmRequire('kafka-node');
      var Producer = kafka.Producer;
      //console.log('kafkaApi' + KafkaApi);
      //console.log(KafkaApi);
      //var kafka = new KafkaApi({
      //    version: "0.3.1"
      //});

      var kafkaSendMessage = function( msg ) {

        var client = new kafka.Client('127.0.0.1:2181');
        var producer = new Producer(client);

        var payloads = [
            //{ topic: 'my-topic-test', messages: [msg], partition: 0 },
            { topic: 'my-topic-test', messages: JSON.stringify(msg), partition: 0 },
        ];
        console.log("notifyEvent.req=");
        console.log(msg);

        producer.on('ready', function() {
          producer.send(payloads, function(err, data){
      		    console.log('notifyEventOk_Sending');
              console.log(data);
           });
        });
        producer.on('error', function(error) {
          console.log('notifyEventError', error);
        });

      };

      kafkaSendMessage(msg);

      // ejemplo envio asincrono
      // var gists = Async.runSync(function(done) {
      //
      //   github.gists.getFromUser({user: 'arunoda'}, function(err, data) {
      //     done(null, data);
      //   });
      // });
      // return gists.result;
    }
  });
