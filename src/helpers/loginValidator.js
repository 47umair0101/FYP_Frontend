const loginValidator = ({ email, password, selectedAccount }) => {
  let emailError = "";
  let passwordError = "";
  let selectedAccountError = "";
  let hasErrors = false;

  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailError = "Please enter a valid email";
    hasErrors = true;
  }

  // Password validation
  if (!password || password.length < 5) {
    passwordError = "Password must be at least 5 characters";
    hasErrors = true;
  }

  if (!selectedAccount) {
    selectedAccountError = "You have to choose your account type";
  }

  // Return the validation results
  return [
    hasErrors,
    {
      emailError,
      passwordError,
      selectedAccountError,
    },
  ];
};

export default loginValidator;
