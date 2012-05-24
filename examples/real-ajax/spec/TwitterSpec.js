describe("Twitter", function() {

	var twitter;
	var successCallback;
	var errorCallback;

    beforeEach(function() {
        twitter = new Twitter();

        successCallback = jasmine.createSpy("success call back");
        errorCallback = jasmine.createSpy("error call back");
    });

    it("should call a happy callback with the user name when a user been found by screen name", function() {

        twitter.getUserNameByScreenName('_pads', successCallback, errorCallback);

        waitsFor(function() {
            return successCallback.callCount > 0;
        }, "success callback was never called", 1000);

        runs(function () {
            expect(successCallback).toHaveBeenCalledWith('Ben Paddock');
        });
    });

    it("should call a sad callback stating a user has not been found, given the screen name", function() {

        twitter.getUserNameByScreenName('________________', successCallback, errorCallback);

        waitsFor(function() {
            return errorCallback.callCount > 0;
        }, "error callback to be called", 1000);

        runs(function () {
            expect(errorCallback).toHaveBeenCalledWith('Not found');
        });
    });


});