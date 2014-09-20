var DashboardView = Backbone.View.extend({
	el: "body",
	attributes : function () {
	    return {
	      class : "dashboard"
	    };
  	},
  	template: _.template("<b><%= value %></b>"),
  	render: function(){
	    this.$el.html(this.template({value: "hej"}));
	    return this;
	}
});

var dashboard = new DashboardView();

dashboard.render();