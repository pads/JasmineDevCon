function Person() {
    this.numberOfPintsDrunk = 0;
    this.pints = [];
}

Person.prototype.buyPints = function(numberOfPints) {
    for(var count = 0; count < numberOfPints; count++) {
        this.pints.push(count);
    }
};

Person.prototype.givePints = function(person, numberOfPints) {
    person.addPints(this.pints);
};

Person.prototype.getPints = function() {
    return this.pints;
};

Person.prototype.addPints = function(pints) {
    this.pints = this.pints.concat(pints);
};

Person.prototype.drinkPint = function() {
    this.pints.pop();
    this.numberOfPintsDrunk++;
};

Person.prototype.isSober = function() {
    return this.numberOfPintsDrunk === 0 ? true : false;
};