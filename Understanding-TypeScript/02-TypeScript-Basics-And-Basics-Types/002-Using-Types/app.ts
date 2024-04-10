let userInput: unknown;

userInput = 5;
userInput = "Hoang";

let userName: string;
// userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An error occurred", 500);
