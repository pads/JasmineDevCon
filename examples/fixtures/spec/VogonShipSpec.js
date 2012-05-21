describe('Vogon Ship', function() {

    describe('The end of Earth', function() {

        beforeEach(function() {

            setFixtures(sandbox({
                id: 'the-milky-way',
                class: 'galaxy'
            }));

            $('#the-milky-way').html('<div class="planet">Earth</div><div class="moon">The Moon</div>');

        });

        it('should remove the planet Earth from the galaxy', function() {
            $('#the-milky-way').destroyPlanet('earth');

            expect($('.planet')).not.toExist();
        });

        it('should not remove The Moon from the galaxy', function() {
            $('#the-milky-way').destroyPlanet('earth');

            expect($('.moon')).toExist();
        });


        it('should notify that a planet in a galaxy has been destroyed by issuing change event', function() {
            spyOnEvent($('#the-milky-way'), 'change');

            $('#the-milky-way').destroyPlanet('earth');

            expect('change').toHaveBeenTriggeredOn($('#the-milky-way'));
        });

   });

});