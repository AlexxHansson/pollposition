var MainRouter = Backbone.Router.extend({
	routes: {
        "": "dashboard",
        "*actions": "defaultRoute"
    },
    dashboard: function() {
		var dashboard = new DashboardView();
		dashboard.render();

		var pollCol = new PollCollection();
		var pollPoint1 = new PollModel(56.170923, 14.863523);
		var pollPoint2 = new PollModel(56.172744, 14.858398);
		var pollPoint3 = new PollModel(56.174408, 14.860951);
		var pollPoint4 = new PollModel(56.172559, 14.866160);
		
		pollCol.add(pollPoint1);
		pollCol.add(pollPoint2);
		pollCol.add(pollPoint3);
		pollCol.add(pollPoint4);
		//pollCol.fetch();

		var map = new MapView(pollCol);
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