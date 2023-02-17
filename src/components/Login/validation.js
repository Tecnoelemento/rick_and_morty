function Validate(data) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexNum = /[0-9]/;
  let errors = {};

  if (data.usrname.length > 35) {
    errors.usrname = "Cannot be longer than 35 characters";
  }

  if (data.usremail.length > 35) {
    errors.usremail = "Cannot be longer than 35 characters";
  }

  if (!regexEmail.test(data.usremail)) {
    errors.usremail = "It must be a valid email";
  }

  if (data.usremail.length === 0) {
    errors.usremail = "Username is required";
  }

  if (!regexNum.test(data.usrpass)) {
    errors.usrpass = "Must contain at least one number";
  }

  if (data.usrpass.length < 6 || data.usrpass.length > 10) {
    errors.usrpass = "Cannot be longer than 10 characters or less than 6";
  }

  return errors;
}

export default Validate;
