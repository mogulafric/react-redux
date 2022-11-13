import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

const Register = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, email, password, repeatPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await register({
        userName,
        email,
        password,
        repeatPassword,
      }).unwrap();
      dispatch(setCredentials({ ...userData, email, userName }));
      setUserName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      navigate("/login");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Register Failed");
      }
      errRef.current.focus();
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);

  const handleUsernameInput = (e) => setUserName(e.target.value);

  const handleRepeatePasswordInput = (e) => setRepeatPassword(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Teacher Register</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          id="name"
          ref={emailRef}
          value={email}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <input
          type="text"
          id="name"
          ref={emailRef}
          value={email}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={password}
          required
        />

        <label htmlFor="password">Repeat Password:</label>
        <input
          type="repeatpassword"
          id="repeatpassword"
          onChange={handlePwdInput}
          value={password}
          required
        />
        <button>Sign up</button>
      </form>
    </section>
  );

  return content;
};
export default Login;
