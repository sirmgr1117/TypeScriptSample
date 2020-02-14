let firstName : string = "Moe";
let lastName : string  = "Yamada";
let email : string  = `${firstName}.${lastName}`;
let key : string  = `${firstName}${1}`;

console.info(email);
console.info(key);

enum Decision {
    Yes,
    No,
    Pending
}
let d : Decision = Decision.Pending;
console.info( d == Decision.Pending);
console.info(Decision[d]);