let usedSomething : number = 0;
let newName : number = 0;
{
    let something : Array<number> = [1, 2, 3];

    for (var i = 0; i < something.length; i++) {
        let s = something[i];
        if (s < 2) {
            usedSomething += s;
        } else {
            newName += s;
        }
    }
}
console.log(usedSomething);
console.log(newName);
