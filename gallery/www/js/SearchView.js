var DownloadView = function() {
    this.initialize = function() {
        this.$el = $('<div/>');
		this.$el.on('keyup', '.search-key', imageSearch);
		imageListView = new ImageListView();
	};
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html();
        return this;
    };
		
	function imageSearch() {
		var search_key =  $('.search-key').val().trim();
		if (search_key.toLowerCase().indexOf(localStorage.key) > -1){
			var key = localStorage.key;
			$('.content', this.$el).html(imageListView.$el);
			imageListView.setImages(localStorage.getItem(key));
		}
	}
	
	this.initialize();
}