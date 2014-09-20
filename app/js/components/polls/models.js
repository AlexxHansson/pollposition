var PollModel = Backbone.Model.extend({
	initialize: function () {
        console.log('Poll model Initialized');
    }
});

var PollCollection = Backbone.Collection.extend({
	url: '/api/getClosestPolls',
	model: PollModel,
	initialize: function () {
        console.log('Poll collection Initialized');
    }
});

var pollCol = new PollCollection();

pollCol.fetch();

console.log(pollCol);