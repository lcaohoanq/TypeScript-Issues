var userInput;
userInput = 5;
userInput = "Hoang";
var userName;
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
