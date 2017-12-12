var DownloadView = function(app) {
    this.initialize = function() {
        this.$el = $('<div/>');
		this.$el.on('click', '#downloadFile', downloadFile);
	};
    this.render = function() {
        this.$el.html(this.template());
        return this;
    };
		
	function downloadFile() {
		var fileTransfer = new FileTransfer();
		var uri = encodeURI($('.url').val().trim());
		var tag = $('.tag').val().trim().toLowerCase();
		var fileURL = cordova.file.cacheDirectory + tag; // where to save
		fileTransfer.download(uri, fileURL, function(entry) {
			console.log("download complete: " + entry.toURL());
			localStorage.setItem(tag, fileURL);
		},
		function(error) {
			console.log("download error source " + error.source);
			console.log("download error target " + error.target);
			console.log("download error code" + error.code);
		},
		false, {
			headers: {"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="}
		}
		);
	}
	
	this.initialize();
}