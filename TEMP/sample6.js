var month = new Date().getMonth() + 1;
var birthMonth = 12;
var message = "";
switch (month) {
    case birthMonth:
        message = "Happy Birthday!!";
        break;
    case 1:
        message = "Happy New Year!!";
        break;
    case 2:
        message = "February!!";
        break;
    case 10:
        message = "Trick or Treat!!";
        break;
    default:
        message = "Welcome Back!!";
        break;
}
console.info(message);
