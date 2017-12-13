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
		var url = $('.url').val().trim();
		var tag = $('.tag').val().trim().toLowerCase();
		var fileURL = cordova.file.cacheDirectory + tag; // where to save
		fileTransfer.download(uri, fileURL, function(entry) {
			console.log("download complete: " + entry.toURL());
			writeFile(url, tag);
		},
		function(error) {
			alert("download error source " + error.source);
			console.log("download error source " + error.source);
			console.log("download error target " + error.target);
			console.log("download error code" + error.code);
		},
		false, {
			headers: {"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="}
		}
		);
	}
	
	function writeFile(url, tag) {
		var type = window.TEMPORARY;
		var size = 5*1024*1024;
		window.requestFileSystem(type, size, successCallback, errorCallback);
		function successCallback(fs) {
			var fileName = (tag + url.substr(url.lastIndexOf('/')+1) + '.txt');
			fs.root.getFile(fileName, {create: true}, function(fileEntry) {
				fileEntry.createWriter(function(fileWriter) {
					localStorage.setItem(tag, fileName);
					console.log(fileName);
					fileWriter.onwriteend = function(e) { alert('Write completed.');};
					fileWriter.onerror = function(e) {
						alert('Write failed: ' + e.toString());
					};
					var blob = new Blob([url], {type: 'text/plain'});
					fileWriter.write(blob);
				}, errorCallback);
			}, errorCallback);
		}
		function errorCallback(error) { alert("ERROR: " + error.code) }
	}
	
	this.initialize();
}