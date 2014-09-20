var MapView = Backbone.View.extend({
	el: "#main-container",
	initialize: function(position, pollCollection){
		this.position=position;
	},
	render: function(){
		var that = this;
		
		$.get('js/components/map/templates/map.html', function (data) {
	        template = _.template(data)();
	        that.$el.append(template);
	        that.initMap();
	    }, 'html');
	},
	initMap: function(){
		var map = L.map('map', 'pollposition.ji7nhhm5').setView([this.position.coords.latitude, this.position.coords.longitude], 13);
		L.tileLayer('http://{s}.tiles.mapbox.com/v3/pollposition.ji7nhhm5/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 18
		}).addTo(map);
	}
});