describe('Marvin', function() {

    var marvin, door;

    beforeEach(function() {
        door = new Door();
        marvin = new Robot();
    });

    it('should open real doors and grumble about them', function() {
        spyOn(door, 'open').andCallThrough();
        marvin.openDoorWithGrumble(door)
        expect(door.open).toHaveBeenCalled();
    });

    it('should open stubbed doors and grumble about them', function() {
        spyOn(door, 'open');
        marvin.openDoorWithGrumble(door)
        expect(door.open).toHaveBeenCalledWith('I hate this door');
    });

    it('should try to open a mock door but fail, yet still moan about it', function() {
        spyOn(door, 'open').andCallFake(function() {
            console.debug("I'm not opening for you!");
            return false;
        });
        var reaction = marvin.openDoorWithGrumble(door)
        expect(reaction).toEqual("It won't open!");
    })
});


