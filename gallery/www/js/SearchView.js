var SearchView = function(app) {
    this.initialize = function() {
        this.$el = $('<div/>');
		this.$el.on('keyup', '.search-key', imageSearch);
		this.$el.on('click', '.')
		console.log("start");
		imageListView = new ImageListView();
	};
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html();
        return this;
    };
		
	function imageSearch() {
		var search_key =  $('.search-key').val().trim();
		console.log(search_key);
		console.log(localStorage.key(0));
		for (var i = 0; i < localStorage.length; i++) {
			console.log("enter");
			if ((search_key.toLowerCase().indexOf(localStorage.key(i)) > -1)){
				console.log("search");
				var value = localStorage.getItem(localStorage.key(i));
				console.log(value);
		 		$('.content', this.$el).html(imageListView.$el);
		 		imageListView.setImages(value);
			}
		}
	}
	
	this.initialize();
}