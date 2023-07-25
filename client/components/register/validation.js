export default function validation(input) {
    const errors = {};

    const nameRegex =  /^[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
//   // Username validation
//   if (!nameRegex.test(input.username)) {
//     errors.username = "Invalid username";
//   }

//   // Password validation
//   if (!passwordRegex.test(input.password) && input.password.length < 8) {
//     errors.password = "Invalid password";
//   }

//   // Email validation
//   if (!emailRegex.test(input.email) && input.email.length < 10) {
//     errors.email = "Invalid email";
//   }

if (input.password.length <= input.confirmPassword.length && input.password !== input.confirmPassword) {
    errors.password = "Passwords don't match";
  }

  
  if (input.email.length <= input.confirmEmail.length && input.email !== input.confirmEmail) {
    errors.email = "Emails don't match";
  }

  return errors;
}