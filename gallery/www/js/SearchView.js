var SearchView = function(app) {
    this.initialize = function() {
        this.$el = $('<div/>');
		this.$el.on('keyup', '.search-key', imageSearch);
		//this.$el.on('click', '#image-list-tpl li', readFile);
	};
    this.render = function() {
        this.$el.html(this.template());
       $('.content', this.$el).html();
        return this;
    };
		
	function imageSearch() {
		
		var search_key =  $('.search-key').val().trim().toLowerCase();
		for (var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			if ((search_key.indexOf(key)) > -1){
				var value = localStorage.getItem(localStorage.key(i));
				readFile(value);
			}
			else
			 $('.content', this.$el).empty();	
	}
}
	
	function readFile(value) {
		var a = document.createElement("a");
		var ulist = document.getElementById("image-list-tpl");
		var newItem = document.createElement("li");
		
		var type = window.TEMPORARY;
		var size = 5*1024*1024;
		window.requestFileSystem(type, size, successCallback, errorCallback);
		function successCallback(fs) {
			fs.root.getFile(value, {}, function(fileEntry) {
				fileEntry.file(function(file) {
					var reader = new FileReader();
					reader.onloadend = function(e) {
						var image = this.result;
						a.textContent = value;
						a.setAttribute('href', image);
						$('.content', this.$el).append(a);
						// $('.content', this.$el).html(imageListView.$el);
						//imageListView.setImages(image);
						//console.log(image);
					};
					reader.readAsText(file);
				}, errorCallback);
			}, errorCallback);
		}
		function errorCallback(error) {alert("ERROR: " + error.code)}
	}
	
	this.initialize();
}