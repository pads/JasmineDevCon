function InfiniteImprobabilityDrive() {}

InfiniteImprobabilityDrive.prototype.getProbability = function(successCallback, errorCallback) {
	$.ajax({
		url: '/probability/get',
		type: "GET",
		dataType: 'xml',
		success: function(xml) {
			successCallback(parseXml(xml));
		},
		error: function(request, status, error) {
            errorCallback(parseXml(request.responseXML));
		},
		statusCode: {
            404: function() {
                errorCallback('Not found!');
            }
        }
	});
};

function parseXml(xml) {
    return $(xml).find('message').text();
}