import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputPassword from '../../components/inputs/input-password';
import InputText from '../../components/inputs/input-text';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/button';
import axios from 'axios';
import { useState } from 'react';

const FORM_NAMES = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const Login = () => {
	const routerPush = useNavigate();
	const [login, setLogin] = useState({
		token: '',
		error: {
			isError: false,
			message: ''
		}
	});

	const { handleSubmit, register } = useForm();

	return (
		<div className={styles.center}>
			<div className={styles.loginContainer}>
				<form
					action=''
					className={styles.loginForm}
					id='login-form'
					onSubmit={handleSubmit(formValues =>
						onSubmit(formValues, setLogin)
					)}
				>
					<h1 className={styles.formTitle}>
						Welcome to
						<br />
						<span>Shoppingify</span>
					</h1>
					<p className={styles.loginDescription}>
						Please enter your credentials.
					</p>
					<InputText label='Email' {...register(FORM_NAMES.EMAIL)} />
					<InputPassword
						label='contraseña'
						{...register(FORM_NAMES.PASSWORD)}
					/>
					<Button type='submit'>Login</Button>
					{login.error.isError && (
						<p className={styles.message}>{login.error.message}</p>
					)}
				</form>
				<p className={styles.signup}>
					You don't have an account?
					<Link to='/signup'>Sign Up Now!</Link>
				</p>
			</div>
		</div>
	);
};

const onSubmit = async (formValues, setLogin) => {
	const { email, password } = formValues;

	console.log(email, password);

	await axios
		.post('https://shoppy-b.herokuapp.com/users/login', {
			email,
			password
		})
		.then(response =>
			setLogin(login => ({
				...login,
				token: response.data
			}))
		)
		.catch(error =>
			setLogin(login => ({
				...login,
				error: {
					isError: true,
					message: error.response.data
				}
			}))
		);
};

export default Login;
