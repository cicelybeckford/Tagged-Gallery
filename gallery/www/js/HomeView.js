var HomeView = function(employee) {
    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '#search', routeSearch);
		this.$el.on('click', '#download', routeDload);
	};
	/*this.render = function() {
   		this.$el.html(this.template(employee));
   	 	return this;
	};*/
	function routeSearch () {
   	 	router.load('Search');
	}
	function routeDload () {
   	 	router.load('Download');
	}
	this.initialize();
}