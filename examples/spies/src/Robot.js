function Robot() {}

Robot.prototype.openDoorWithGrumble = function(door) {
    var doorOpen = door.open('I hate this door');
    if(!doorOpen) {
        return "It won't open!";
    }
};