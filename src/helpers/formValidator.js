const formValidator = ({
  fullName,
  email,
  date,
  cnic,
  phoneNumber,
  address,
  password,
}) => {
  let fullNameError = "";
  let emailError = "";
  let dateError = "";
  let cnicError = "";
  let phoneNumberError = "";
  let addressError = "";
  let passwordError = "";

  let hasErrors = false;

  // Full Name validation
  if (!fullName) {
    fullNameError = "Please enter your full name";
    hasErrors = true;
  } else if (fullName.length < 5 || fullName.length > 50) {
    fullNameError = "Full name must be between 5 and 50 characters";
    hasErrors = true;
  }

  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailError = "Please enter a valid email";
    hasErrors = true;
  }

  // Date validation
  if (!date) {
    dateError = "Please enter a date";
    hasErrors = true;
  }

  // CNIC validation
  const cnicRegex = /^\d{13}$/;
  if (!cnic) {
    cnicError = "Please enter your CNIC";
    hasErrors = true;
  } else if (!cnicRegex.test(cnic)) {
    cnicError =
      "Invalid CNIC format. Please ensure the CNIC consists of 13 digits only";
    hasErrors = true;
  }

  // Phone Number validation
  const phoneNumberRegex = /^\+?\d{11}$/;
  if (!phoneNumber) {
    phoneNumberError = "Please enter your full phone number";
    hasErrors = true;
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    phoneNumberError = "Invalid phone number format";
    hasErrors = true;
  }

  // Address validation
  if (!address || address.length < 5) {
    addressError = "Please enter a valid address";
    hasErrors = true;
  }

  // Password validation
  if (!password || password.length < 5) {
    passwordError = "Password must be at least 5 characters";
    hasErrors = true;
  }

  // Return the validation results
  return [
    hasErrors,
    {
      fullNameError,
      emailError,
      dateError,
      cnicError,
      phoneNumberError,
      addressError,
      passwordError,
    },
  ];
};

export default formValidator;
