Meteor.methods({
    'publishMessage': function publishMessage(msg) {
      var KafkaApi = Meteor.npmRequire('kafka-node');
      var kafka = new KafkaApi({
          version: "0.3.1"
      });

      var gists = Async.runSync(function(done) {
        github.gists.getFromUser({user: 'arunoda'}, function(err, data) {
          done(null, data);
        });
      });

      return gists.result;
    }
  });
