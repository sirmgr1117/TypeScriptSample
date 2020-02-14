let month : number = new Date().getMonth() + 1;
let birthMonth : number = 12;
let message : string = "";

if (month == birthMonth) {
    message = "Happy Birthday!!";
} else if (month == 1) {
    message = "Happy New Year!!";
} else {
    message = "Welcome Back!!";
}
console.info(message);

let message2 : string = (month == birthMonth ? "Happy Birthday!!" : "Welcome Back!!");
console.info(message2);