/*
 * @Author: Murphy
 * @Date: 2021-03-24 07:26:23
 * @LastEditTime: 2021-07-16 13:01:32
 */
import { useState } from "react";
import validator from "validator";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [email, setEmail] = useState("");
  let formIsValid = false;
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = email.trim() !== "" && validator.isEmail(email);
  const enteredEmailIsInValid = !enteredEmailIsValid && emailTouched;

  // console.log(validator.isEmail(email));
  if (!enteredNameIsValid && !enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlur = () => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEmail("");
    setEnteredNameTouched(false);
    setEmailTouched(false);
    console.log(enteredName);
  };

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlur}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name muct be not be empty.</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={email}
          onBlur={emailInputBlur}
        />
        {enteredEmailIsInValid && (
          <p className="error-email">email is invalid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
