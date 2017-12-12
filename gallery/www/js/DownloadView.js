var DownloadView = function() {
    this.initialize = function() {
        this.$el = $('<div/>');
		this.$el.on('click', '#download', downloadFile);
	};
	/*this.render = function() {
   		this.$el.html(this.template(employee));
   	 	return this;
	};*/
		
	function downloadFile() {
		var fileTransfer = new FileTransfer();
		var uri = encodeURI("http://s14.postimg.org/i8qvaxyup/bitcoin1.jpg");
		var fileURL = cordova.file.cacheDirectory + "myFile"; // where to save
		fileTransfer.download(uri, fileURL, function(entry) {
			console.log("download complete: " + entry.toURL());
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