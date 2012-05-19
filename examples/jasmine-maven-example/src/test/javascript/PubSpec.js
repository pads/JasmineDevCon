describe("Arthur's Local Pub", function() {

    var arthur;
    var ford;

    beforeEach(function() {
        ford = new Person();
        arthur = new Person();
    });

    describe("Ford Buys Arthur Drinks", function() {

        it('should buy 3 pints of bitter', function() {
            var pints = ford.buyPints(3);

            expect(ford.getPints().length).toEqual(3);
        });

        it('should give Arthur 3 pints of bitter', function() {
            var pints = ford.buyPints(3);
            ford.givePints(arthur, 3);

            expect(arthur.getPints().length).toEqual(3);
        });

    });

    describe("Arthur Consumes Drinks", function() {

        beforeEach(function() {
            var pints = ford.buyPints(3);
            ford.givePints(arthur, 3);
        });

        it('should be sober having drunk no bitters', function() {
            expect(arthur.isSober()).toBeTruthy();
        });

        it('should drink 3 pints of bitter', function() {
            arthur.drinkPint();
            arthur.drinkPint();
            arthur.drinkPint();

            expect(arthur.getPints().length).toEqual(0);
        });

        it('should be sober having drunk 3 bitters', function() {
            arthur.drinkPint();
            arthur.drinkPint();
            arthur.drinkPint();

            expect(arthur.isSober()).toBeTruthy();
        });


    });

});