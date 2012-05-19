function InfiniteImprobabilityDrive() {
	this.baseUrl = 'http://www.heartofgold.com';
}

InfiniteImprobabilityDrive.prototype.getProbability = function(sucessCallback, errorCallback) {
	$.ajax({
		url: this.baseUrl,
		type: "GET",
		success: function(data, status, request) {
			sucessCallback($.parseJSON(request.responseText).message);
		},
		error: function(request, status, error) {
			errorCallback($.parseJSON(request.responseText).message);
		}
	});
};