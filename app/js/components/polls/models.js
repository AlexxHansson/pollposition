var PollModel = Backbone.Model.extend({
	initialize: function (lat, lng) {
		this.lat = lat;
		this.lng = lng;
    }
});

var PollCollection = Backbone.Collection.extend({
	url: '/api/test',
	model: PollModel,
	initialize: function () {
		
    }
});