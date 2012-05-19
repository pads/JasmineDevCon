describe('Planet Generator', function() {

	beforeEach(function() {
        loadFixtures('EmptySpace.html');
	});

	it('Should create Earth Mark II', function() {
        $('#space').generatePlanet('Earth II');

        expect($('#space')).toHaveText('Earth II');
	});

});