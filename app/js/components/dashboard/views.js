var DashboardView = Backbone.View.extend({
	el: "body",
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
		var hello = "Hello";
		var world = [1, 2, 3];
		$.get('js/components/dashboard/templates/dashboard.html', function (data) {
	        template = _.template(data)({hello: hello, world: world});//Option to pass any dynamic values to template
	        that.$el.append(template);//adding the template content to the main template.
	    }, 'html');
	}
});

// var dashboard = new DashboardView();

// dashboard.render();
