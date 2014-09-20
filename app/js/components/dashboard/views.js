var DashboardView = Backbone.View.extend({
	el: "#main-container",
  	//template: _.template("<b><%= value %></b><b><%= asd %></b>"),
	// render: function(){
	//     this.$el.append(this.template({value: "hej", asd: "asdasd"}));
	//     return this;
	// }
	initialize: function () {
        console.log('Dashboard View Initialized');
    },
	render: function () {
		var that = this;
		$.get('js/components/dashboard/templates/dashboard.html', function (data) {
	        template = _.template(data)({});//Option to pass any dynamic values to template
	        that.$el.append(template);//adding the template content to the main template.
	    }, 'html');
	}
});

// var dashboard = new DashboardView();

// dashboard.render();
