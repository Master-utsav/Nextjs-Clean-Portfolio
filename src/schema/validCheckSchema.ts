const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const usernameRegex =  /^[a-zA-Z0-9_]{3,16}$/

export function checkConstraintsAsEmail(email: string) {
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
}

export function checkConstraintsAsUserName(username: string) {
  const isValidUserName = usernameRegex.test(username);
  return isValidUserName;
}

export function checkConstraintsAsPassword(password: string) {
  const isValidPassword = passwordRegex.test(password);
  return isValidPassword;
}

export function checkLoginConstraintsAsEmail(email: string, password: string) {
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  return isValidEmail && isValidPassword;
}

export function checkLoginConstraintsAsUserName(username: string, password: string) {
  const isValidUserName = usernameRegex.test(username);
  const isValidPassword = passwordRegex.test(password);
  return isValidUserName && isValidPassword;
}

export function returnIdentity(input: string) {
  return emailRegex.test(input) ? "email" : "username";
}

export function checkSignUpConstraints(username: string , email : string , password : string){
  const isValidUserName = usernameRegex.test(username);
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  return isValidUserName && isValidEmail && isValidPassword;
}
