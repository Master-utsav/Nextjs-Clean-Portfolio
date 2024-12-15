export function checkConstraintsAsEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
}

export function checkConstraintsAsUserName(userName: string) {
  const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  const isValidUserName = userNameRegex.test(userName);
  return isValidUserName;
}

export function checkLoginConstraintsAsEmail(email: string, password: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidPassword = passwordRegex.test(password);

  return isValidEmail && isValidPassword;
}

export function checkLoginConstraintsAsUserName(
  userName: string,
  password: string
) {
  const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  const isValidUserName = userNameRegex.test(userName);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidPassword = passwordRegex.test(password);

  return isValidUserName && isValidPassword;
}

export function returnIdentity(input: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(input)) {
    return "email";
  } else {
    return "username";
  }
}
