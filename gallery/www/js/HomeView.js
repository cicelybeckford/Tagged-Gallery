var HomeView = function() {
    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '#searchView', routeSearch);
		this.$el.on('click', '#downloadView', routeDload);
	};
	this.render = function() {
   		this.$el.html(this.template());
   	 	return this;
	};
	function routeSearch () {
   	 	router.load('Search');
	}
	function routeDload () {
   	 	router.load('Download');
	}
	this.initialize();
}