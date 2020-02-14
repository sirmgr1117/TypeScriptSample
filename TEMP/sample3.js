var firstName = "Moe";
var lastName = "Yamada";
var email = firstName + "." + lastName;
var key = "" + firstName + 1;
console.info(email);
console.info(key);
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 0] = "Yes";
    Decision[Decision["No"] = 1] = "No";
    Decision[Decision["Pending"] = 2] = "Pending";
})(Decision || (Decision = {}));
var d = Decision.Pending;
console.info(d == Decision.Pending);
console.info(Decision[d]);
