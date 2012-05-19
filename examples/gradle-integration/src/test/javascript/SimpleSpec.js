describe('A Simple Class', function() {

    var simpleClass;

    beforeEach(function() {
        simpleClass = new SimpleClass();
    });

    it('should simply do something useful', function() {
        expect(simpleClass.doSomething()).toEqual('useful');
    });

});