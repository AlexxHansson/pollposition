var MapView = Backbone.View.extend({
	el: "#main-container",
	collection: PollCollection,
	map: {},
	initialize: function(pollCollection){
		this.collection = pollCollection;
	},
	render: function(){
		var that = this;
		
		$.get('js/components/map/templates/map.html', function (data) {
	        template = _.template(data)();
	        that.$el.append(template);
	        that.initMap();
	        that.addPoints();
	    }, 'html');
	},
	initMap: function(){
		this.map = L.map('map', 'pollposition.ji7nhhm5').setView([56.1642242,14.8668415], 13);
		L.tileLayer('http://{s}.tiles.mapbox.com/v3/pollposition.ji7nhhm5/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 18
		}).addTo(this.map);
	},
	addPoints: function(){
		var that = this;
		_.each(this.collection.models, function(model){
			var marker = L.marker([model.lat, model.lng]).addTo(that.map);
		});	
	}
});