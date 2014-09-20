var MainRouter = Backbone.Router.extend({
	routes: {
        "": "dashboard",
        "*actions": "defaultRoute"
    },
    dashboard: function() {
  		var dashboard = new DashboardView();
  		dashboard.render();

  		var pollCol = new PollCollection();
  		pollCol.fetch();
      getLocation();
      function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            console.log('hej')
        }
      }
      function showPosition(position) {
        console.log(position);
        var map = new MapView(position);
        map.render();
      }
  	},
  	polls: function() {
		
  	},
  	defaultRoute: function(){
  		console.log("default route");
  	}
});

var router = new MainRouter();

Backbone.history.start();