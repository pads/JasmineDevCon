describe("Infinite Improbability Drive", function() {

	var infiniteImprobabilityDrive;
	var request;
	var successCallback;
	var errorCallback;

    beforeEach(function() {
        successCallback = jasmine.createSpy("success call back");
        errorCallback = jasmine.createSpy("error call back");

        jasmine.Ajax.useMock();
        infiniteImprobabilityDrive = new InfiniteImprobabilityDrive();
        infiniteImprobabilityDrive.getProbability(successCallback, errorCallback);
        request = mostRecentAjaxRequest();
    });

	describe('JSON Request', function() {

        var testResponses = {
            probabilities: {
                success: {
                    status: 200,
                    responseText: '{"message":"100000000000/1"}'
                },
                error: {
                    status: 500,
                    responseText: '{"message":"Alert!  Missles heading your way"}'
                },
                notFound: {
                    status: 404
                }
            }
        }

        it("should retrieve a probability when the request is successful", function() {
            request.response(testResponses.probabilities.success);
            expect(successCallback).toHaveBeenCalledWith('100000000000/1');
        });

        it("should not retrieve a probability when the server encountered an error", function() {
            request.response(testResponses.probabilities.error);
            expect(errorCallback).toHaveBeenCalledWith('Alert!  Missles heading your way');
        });

        it("should not retrieve a probability when the server could not find it", function() {
            request.response(testResponses.probabilities.notFound);
            expect(errorCallback).toHaveBeenCalledWith('Not found!');
        });

	});

});