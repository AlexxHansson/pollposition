var PollModel = Backbone.Model.extend({
	initialize: function () {
        console.log('Poll model Initialized');
    }
});

var PollCollection = Backbone.Collection.extend({
	url: '/api/test',
	model: PollModel,
	initialize: function () {
        console.log('Poll collection Initialized');
    }
});