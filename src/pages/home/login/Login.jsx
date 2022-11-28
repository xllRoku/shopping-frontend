import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.center}>
      <div className={styles.loginContainer}>
        <form action="" className={styles.loginForm} id="login-form">
          <h1 className={styles.formTitle}>
            Welcome to
            <br />
            <span>Shoppingify</span>
          </h1>
          <p className={styles.loginDescription}>
            Please enter your credentials.
          </p>
          <label form="username" className={styles.formInput}>
            Username:
            <input
              type="text"
              id="username"
              className={styles.inputBox}
              name="username"
              placeholder="Enter your username"
            />
            <span className={styles.message}>Enter your Username.</span>
          </label>
          <label form="Password" className={styles.formInput}>
            Password:
            <input
              type="password"
              id="password"
              className={styles.inputBox}
              name="password"
              placeholder="Enter your password"
            />
            <span className={styles.message}>Enter your Password.</span>
          </label>
          <input
            type="submit"
            value="Login"
            className={styles.primaryBtn}
            id="primary-btn"
          />
        </form>
        <p className={styles.signup}>
          You don't have an account?
          <Link to="/signup">Sign Up Now!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
