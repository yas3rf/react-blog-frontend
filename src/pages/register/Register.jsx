import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Name</label>
        <input
          className="registerInput"
          type="test"
          placeholder="Enter your Name..."
        />
        <label>Username</label>
        <input
          className="registerInput"
          type="test"
          placeholder="Enter Username..."
        />

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
