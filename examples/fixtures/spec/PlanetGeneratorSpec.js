describe('Planet Generator', function() {

    describe('Earth Mark II', function() {

        beforeEach(function() {
            loadFixtures('EmptySpace.html');
        });

        it('should label the empty space with "Earth II"', function() {
            $('#space').generatePlanet('Earth II');

            expect($('#space')).toHaveText('Earth II');
        });

        it('should be of class planet', function() {
            $('#space').generatePlanet('Earth II');

            expect($('#space')).toHaveClass('planet');
        });

        it('should be located by a valid jQuery class selector', function() {
            $('#space').generatePlanet('Earth II');

            expect($('#space')).toBe('.planet');
        });

        it('should preserve the containing div', function() {
            $('#space').generatePlanet('Earth II');

            expect($('#space')).toBe('div#space');
        });

   });

});