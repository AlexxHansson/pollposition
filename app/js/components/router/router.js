var MainRouter = Backbone.Router.extend({
	routes: {
        "": "dashboard",
        "*actions": "defaultRoute" // Backbone will try match the route above first
    },
    dashboard: function() {
		var dashboard = new DashboardView();
		dashboard.render();
  	},
  	defaultRoute: function(){
  		console.log("default route")
  	}
});

var router = new MainRouter();

router.on('route:defaultRoute', function(actions) {
    alert(actions);
})

Backbone.history.start();