describe("Infinite Improbability Drive", function() {

	var infiniteImprobabilityDrive;
	var request;
	var successCallback;
	var errorCallback;

    beforeEach(function() {
        infiniteImprobabilityDrive = new InfiniteImprobabilityDrive();

        successCallback = jasmine.createSpy("success call back");
        errorCallback = jasmine.createSpy("error call back");
    });

    afterEach(function() {
        $.mockjaxClear();
    });

    it("should retrieve a probability when the request is successful", function() {

        $.mockjax({
            url: '/probability/get',
            responseTime: 150,
            status: 200,
            dataType: 'xml',
            responseXML: '<message>100000000000/1</message>'
        });

        runs(function () {
            infiniteImprobabilityDrive.getProbability(successCallback, errorCallback);
        });

        waits(500);

        runs(function () {
            expect(successCallback).toHaveBeenCalledWith('100000000000/1');
        });
    });

    it("should not retrieve a probability when the server encountered an error", function() {

        $.mockjax({
            url: '/probability/get',
            responseTime: 275,
            status: 500,
            dataType: 'xml',
            responseXML: '<message>Alert!  Missles heading your way</message>'
        });

        runs(function () {
            infiniteImprobabilityDrive.getProbability(successCallback, errorCallback);
        });

        waits(500);

        runs(function () {
            expect(errorCallback).toHaveBeenCalledWith('Alert!  Missles heading your way');
        });
    });

    it("should not retrieve a probability when the server could not find it", function() {

        $.mockjax({
            url: '/probability/get',
            responseTime: 75,
            status: 404,
            dataType: 'xml'
        });

        runs(function () {
            infiniteImprobabilityDrive.getProbability(successCallback, errorCallback);
        });

        waits(500);

        runs(function () {
            expect(errorCallback).toHaveBeenCalledWith('Not found!');
        });
    });


});