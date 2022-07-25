import { useState } from "react";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import {
  signInAuthUserWithEmail,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./SignInForm.scss";

const INITIAL_SIGN_IN_FORM_VALUES = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInFormValues, setSignInFormValues] = useState(
    INITIAL_SIGN_IN_FORM_VALUES
  );
  const [signInSubmitIsLoading, setSignInSubmitIsLoading] = useState(false);
  const { email, password } = signInFormValues;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInFormValues({ ...signInFormValues, [name]: value });
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setSignInSubmitIsLoading(true);
      const { user } = await signInAuthUserWithEmail(email, password);

      setSignInFormValues(INITIAL_SIGN_IN_FORM_VALUES);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Account does not exist. Please check email address");
          break;
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        default:
          console.log("error occured while signing in", error);
          break;
      }
    } finally {
      setSignInSubmitIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignUpFormSubmit}>
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
        <div className="buttons-container">
          <Button type="submit" disabled={signInSubmitIsLoading}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
