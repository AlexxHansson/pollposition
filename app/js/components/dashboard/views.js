var DashboardView = Backbone.View.extend({
	el: "#main-container",
	initialize: function () {
        console.log('Dashboard View Initialized');
    },
	render: function () {
		var that = this;
		$.get('js/components/dashboard/templates/dashboard.html', function (data) {
	        template = _.template(data)({});
	        that.$el.append(template);
	    }, 'html');
	}
});
