var usedSomething = 0;
var newName = 0;
{
    var something = [1, 2, 3];
    for (var i = 0; i < something.length; i++) {
        var s = something[i];
        if (s < 2) {
            usedSomething += s;
        }
        else {
            newName += s;
        }
    }
}
console.log(usedSomething);
console.log(newName);
