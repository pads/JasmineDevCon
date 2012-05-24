function Twitter() {
    this.baseUrl = 'http://api.twitter.com/1';
}

Twitter.prototype.getUserNameByScreenName = function(user, successCallback, errorCallback) {

    $.ajax({
        url:this.baseUrl + '/users/show.json?suppress_response_codes&',
        dataType: 'jsonp',
        data: { "screen_name" : user },
        success: function(json) {
            if(json.error) {
                errorCallback(json.error);
            } else {
                successCallback(json.name);
            }
        }
    });
};