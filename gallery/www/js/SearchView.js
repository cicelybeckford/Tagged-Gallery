var SearchView = function(app) {
    this.initialize = function() {
        this.$el = $('<div/>');
		this.$el.on('keyup', '.search-key', imageSearch);
		this.$el.on('click', '#image', readFile);
		console.log("start");
		imageListView = new ImageListView();
	};
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html();
        return this;
    };
		
	function imageSearch() {
		var search_key =  $('.search-key').val().trim().toLowerCase();
		console.log(search_key);
		for (var i = 0; i < localStorage.length; i++) {
			console.log("enter");
			var key = localStorage.key(i);
			if ((search_key.indexOf(key)) > -1){
				console.log("search");
				var value = localStorage.getItem(localStorage.key(i));
				console.log(value);
		 		$('.content', this.$el).html(imageListView.$el);
		 		imageListView.setImages(value);
			}
		}
	}
	
	function readFile(value) {
		var type = window.TEMPORARY;
		var size = 5*1024*1024;
		window.requestFileSystem(type, size, successCallback, errorCallback);
		function successCallback(fs) {
			fs.root.getFile(value, {}, function(fileEntry) {
				fileEntry.file(function(file) {
					var reader = new FileReader();
					reader.onloadend = function(e) {
						var image = this.result;
					};
					reader.readAsText(file);
				}, errorCallback);
			}, errorCallback);
		}
		function errorCallback(error) {alert("ERROR: " + error.code)}
	}
	
	this.initialize();
}