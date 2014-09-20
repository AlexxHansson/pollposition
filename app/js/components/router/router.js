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

		var map = new MapView();
		map.render();
  	},
  	polls: function() {
		
  	},
  	defaultRoute: function(){
  		console.log("default route");
  	}
});

var router = new MainRouter();

Backbone.history.start();