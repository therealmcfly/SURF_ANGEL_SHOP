import { useState } from "react";
import {
  createAuthUserWithEmail,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import "./SignUpForm.scss";

const INITIAL_FORM_VALUES = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [signUpFormValues, setSignUpFormValues] = useState(INITIAL_FORM_VALUES);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const { displayName, email, password, confirmPassword } = signUpFormValues;

  function handleChange(e) {
    const { name, value } = e.target;

    setSignUpFormValues({ ...signUpFormValues, [name]: value });
  }

  async function handleSignUpFormSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("check confirm password");
      return;
    }

    try {
      setSubmitIsLoading(true);
      const { user } = await createAuthUserWithEmail(email, password);

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });

      setSignUpFormValues(INITIAL_FORM_VALUES);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "This email is already being used. Please use a different email address."
        );
      } else {
        console.log("An error has occured while creating account", error);
      }
    } finally {
      setSubmitIsLoading(false);
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSignUpFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
          autoComplete="on"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          autoComplete="on"
        />
        <Button type="submit" disabled={submitIsLoading}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
