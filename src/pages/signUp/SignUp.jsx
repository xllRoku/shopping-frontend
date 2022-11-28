import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.center}>
      <div className={styles.signupContainer}>
        <form action="" className={styles.signupForm} id="signup-form">
          <h1 className={styles.formTitle}>
            Welcome to
            <br />
            <span>Shoppingify</span>
          </h1>
          <p className={styles.signupDescription}>
            Hi, create an account in a few minutes.
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
            <span className={styles.message}>
              Upper and lower case letters only.
            </span>
          </label>
          <label form="first-name" className={styles.formInput}>
            Name:
            <input
              type="text"
              id="first-name"
              className={styles.inputBox}
              name="fist-name"
              placeholder="Enter your name"
            />
            <span className={styles.message}>Enter your Name.</span>
          </label>
          <label form="email" className={styles.formInput}>
            Email:
            <input
              type="email"
              id="email"
              className={styles.inputBox}
              name="email"
              placeholder="Enter your Email"
            />
            <span className={styles.message}>Enter a valid email address.</span>
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
            <span className={styles.message}>
              The password must contain eight characters, a capital letter, a
              small letter and a number.
            </span>
          </label>
          <input
            type="button"
            value="Signup"
            className={styles.primaryBtn}
            id="primary-btn"
          />
        </form>
        <p className={styles.login}>
          You are a member? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
