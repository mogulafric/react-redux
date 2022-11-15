import { useGetUserQuery , useUpdateUserQuery} from "./usersApiSlice";
import { useNavigate, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const UpdateProfile = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setName("");
  }, []);
  useEffect(() => {
    setPassword("");
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [name, password, confirmPassword]);

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UpdateProfile({ email, name, password , confirmPassword}).unwrap();
      dispatch(setCredentials({ ...userData, name }));
      setName("");
      setPassword("");
      setConfirmPassword("");
      navigate("/welcome");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleNameInput = (e) => setName(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleConfirmPasswordInput = (e) => setConfirmPassword(e.target.value);

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery();
  const email = user.data[0].email

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
        <section className="login">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
  
        <h1> Update profile</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={user.data[0].email}
            disabled="true"
            style={{color:"#fff"}}
          />
          <label htmlFor="name">Name:{user.data[0].userName}</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            value={name}
            onChange={handleNameInput}
            autoComplete="off"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            onChange={handlePasswordInput}
            value={password}
            required
          />
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="confirmpassword"
            id="confirmpassword"
            ref={confirmPasswordRef}
            onChange={handleConfirmPasswordInput}
            value={confirmPassword}
            required
          />
          <button>Update</button>
        </form>
        <Link to="/welcome">Back to Home</Link>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};
export default UpdateProfile;
