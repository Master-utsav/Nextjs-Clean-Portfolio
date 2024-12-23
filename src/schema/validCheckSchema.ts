const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const usernameRegex =  /^[a-zA-Z0-9-]{3,16}$/

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

export function generateRandomPassword(): string {

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '@$!%*?&';
  
  const getRandomChar = (charset: string) => charset[Math.floor(Math.random() * charset.length)];
  
  const password = [
    getRandomChar(lowercase), // at least one lowercase
    getRandomChar(uppercase), // at least one uppercase
    getRandomChar(numbers),   // at least one number
    getRandomChar(specialChars), // at least one special character
  ];
  
  // Add additional random characters to reach minimum length of 8
  const allChars = lowercase + uppercase + numbers + specialChars;
  const remainingLength = 4 + Math.floor(Math.random() * 5); 
  
  for (let i = 0; i < remainingLength; i++) {
    password.push(getRandomChar(allChars));
  }
  
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }
  
  const finalPassword = password.join('');
  
  if (!passwordRegex.test(finalPassword)) {
    return generateRandomPassword();
  }
  
  return finalPassword;
}
