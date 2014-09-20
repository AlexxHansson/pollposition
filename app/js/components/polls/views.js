var PollView = Backbone.View.extend({
	el: "body",
	initialize: function () {
        console.log('Poll View Initialized');
    },
	render: function () {
		var that = this;
		$.get('js/components/dashboard/templates/dashboard.html', function (data) {
	        template = _.template(data)({hello: hello, world: world});//Option to pass any dynamic values to template
	        that.$el.append(template);//adding the template content to the main template.
	    }, 'html');
	}
});