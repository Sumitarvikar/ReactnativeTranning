import React, { useEffect, useState } from "react";
import "./styles.css";
import { InitialValues, LoginResponse } from "./Interfaces/interface";
import login from "./Services/loginService";

function App() {
  const initialValues: InitialValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormvalues] = useState(initialValues);
  const [formError, setFormError] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginResponse, setLoginResponse] = useState("");

  useEffect(() => {
    setFormError(validate(formValues));
  }, [formValues, isSubmit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsSubmit(true);
    if (
      Object.keys(formError).length === 0 &&
      formValues.password !== "" &&
      formValues.username !== ""
    ) {
      const result: LoginResponse = await login(formValues);
      if (result.success) {
        setLoginResponse(`Login successful! Token: ${result.token}`);
      } else {
        setLoginResponse(result.message || "Login failed!");
      }
    }
  };
  const validate = (values: InitialValues) => {
    const errors: InitialValues = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      if (isSubmit) {
        errors.username = "Username is required!";
      }
    } else if (!regex.test(values.username)) {
      errors.username = "This is not a valid email format!";
    }
    if (!values.password) {
      if (isSubmit) {
        errors.password = "Password is required";
      }
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="fullscreen-container">
      <div className="App">
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          className="stacked"
          value={formValues.username || ""}
          onChange={handleChange}
        />
        {formError.username && (
          <p className="error-text">{formError.username}</p>
        )}
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className="stacked"
          value={formValues.password || ""}
          onChange={handleChange}
        />
        {formError.password && (
          <p className="error-text">{formError.password}</p>
        )}
         {/* <select id="gender" name="gender" className="stacked">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select> */}
        <button type="button" onClick={handleOnSubmit}>
          Submit
        </button>
        {loginResponse && <p className="login-message">{loginResponse}</p>}
      </div>
    </div>
  );
}

export default App;
