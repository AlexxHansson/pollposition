var MainRouter = Backbone.Router.extend({
	routes: {
        "": "dashboard",
        "*actions": "defaultRoute"
    },
    dashboard: function() {
  		var dashboard = new DashboardView();
  		dashboard.render();

		
		//pollCol.fetch();

    this.getLocation(function (position) {
        
        var pollCol = new PollCollection();
        var pollPoint1 = new PollModel(56.170923, 14.863523);
        var pollPoint2 = new PollModel(56.172744, 14.858398);
        var pollPoint3 = new PollModel(56.174408, 14.860951);
        var pollPoint4 = new PollModel(56.172559, 14.866160);
        
        pollCol.add(pollPoint1);
        pollCol.add(pollPoint2);
        pollCol.add(pollPoint3);
        pollCol.add(pollPoint4);
        var map = new MapView(position, pollCol);
        map.render();
      }); 
  	},
  	polls: function() {
		
  	},
  	defaultRoute: function(){
  		console.log("default route");
  	},
    getLocation: function(func) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(func);
      } else {
        alert("Geolocation not supported");
      }
    }
});

var router = new MainRouter();

Backbone.history.start();