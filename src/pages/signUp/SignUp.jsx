import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
import InputText from '../../components/inputs/input-text';
import InputPassword from '../../components/inputs/input-password';
import Button from '../../components/atoms/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FORM_NAMES = {
	NAME: 'name',
	EMAIL: 'email',
	PASSWORD: 'password'
};

const SignUp = () => {
	const routerPush = useNavigate();
	const [registerResponse, setRegister] = useState({
		ok: false,
		error: {
			isError: false,
			message: ''
		}
	});

	const { handleSubmit, register } = useForm();

	return (
		<div className={styles.center}>
			<div className={styles.signupContainer}>
				<form
					action=''
					className={styles.signupForm}
					id='signup-form'
					onSubmit={handleSubmit(formValues =>
						onSubmit(formValues, setRegister, routerPush)
					)}
				>
					<h1 className={styles.formTitle}>
						Welcome to
						<br />
						<span>Shoppingify</span>
					</h1>
					<p className={styles.signupDescription}>
						Hi, create an account in a few minutes.
					</p>
					<InputText
						label='Username:'
						{...register(FORM_NAMES.NAME)}
					/>
					<InputText label='Email:' {...register(FORM_NAMES.EMAIL)} />

					<InputPassword
						label='Password'
						{...register(FORM_NAMES.PASSWORD)}
					/>
					<Button type='submit'>Register</Button>
				</form>
				<p className={styles.login}>
					You are a member? <Link to='/'>Log in</Link>
				</p>
			</div>
		</div>
	);
};

const onSubmit = async (formValues, setRegister, routerPush) => {
	const { name, email, password } = formValues;

	axios
		.post('https://shoppy-b.herokuapp.com/users/register', {
			name,
			email,
			password
		})
		.then(response => {
			if (response.data === 'El usuario se ha registrado correctamente') {
				routerPush('/home');
			}
		})
		.catch(error => console.log(error.response.data));
};

export default SignUp;
