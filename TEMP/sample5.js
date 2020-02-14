var month = new Date().getMonth() + 1;
var birthMonth = 12;
var message = "";
if (month == birthMonth) {
    message = "Happy Birthday!!";
}
else if (month == 1) {
    message = "Happy New Year!!";
}
else {
    message = "Welcome Back!!";
}
console.info(message);
var message2 = (month == birthMonth ? "Happy Birthday!!" : "Welcome Back!!");
console.info(message2);
