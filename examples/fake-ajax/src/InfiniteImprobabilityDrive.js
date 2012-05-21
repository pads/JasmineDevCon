function InfiniteImprobabilityDrive() {
	this.baseUrl = 'http://www.heartofgold.com';
}

InfiniteImprobabilityDrive.prototype.getProbability = function(successCallback, errorCallback) {
	$.ajax({
		url: this.baseUrl,
		type: "GET",
		success: function(data, status, request) {
			successCallback(safeJSONParse(request));
		},
		error: function(request, status, error) {
			errorCallback(safeJSONParse(request));
		},
		statusCode: {
            404: function() {
                errorCallback('Not found!');
            },
            500: function(request) {
                errorCallback(safeJSONParse(request));
            }
        }
	});
};

function safeJSONParse(request) {
    if(request.responseText) {
        return $.parseJSON(request.responseText).message;
    }
    return null;
}