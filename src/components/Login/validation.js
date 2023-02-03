function Validate(data) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexNum = /[0-9]/;
  let errors = {};

  if (data.username.length > 35) {
    errors.username = "Cannot be longer than 35 characters";
  }

  if (!regexEmail.test(data.username)) {
    errors.username = "It must be a valid email";
  }

  if (data.username.length === 0) {
    errors.username = "Username is required";
  }

  if (!regexNum.test(data.password)) {
    errors.password = "Must contain at least one number";
  }

  if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "Cannot be longer than 10 characters or less than 6";
  }

  return errors;
}

export default Validate;
