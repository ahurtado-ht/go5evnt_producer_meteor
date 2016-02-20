Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('eventos');
  }
});

Router.route('/', {name: 'homeList'});

Router.route('/eventos', {name: 'eventosList'});

Router.route('/eventos/create', {
  name: 'eventoCreate'
});

Router.route('/eventos/:_id', {
  name: 'eventosPage',
  data: function() {
          return Eventos.findOne(this.params._id);
		}
});

Router.route('/eventos/:_id/edit', {
  name: 'eventoEdit',
  data: function() {
    return Eventos.findOne(this.params._id);
  }
});



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'eventosCreate'});
