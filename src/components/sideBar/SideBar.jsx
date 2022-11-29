import styles from './SideBar.module.css';
import logo from '../../assets/images/logo.svg';

const SideBar = () => {
	return (
		<aside className={styles.mainMenu}>
			<a href='#' className={styles.userIcon}>
				<img src={logo} alt='' />
			</a>
			<div className={styles.basicOptions}>
				<a href='' className={styles.icon} title='Items'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${styles.faSolid} ${styles.iconHover}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
				</a>
				<br />
				<a href='' className={styles.icon} title='Update'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${styles.faUpdate} ${styles.iconHover}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
						/>
					</svg>
				</a>
			</div>
			<div className={styles.shoppingCart}>
				<a href='' className={styles.icon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={styles.faCart}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
						/>
					</svg>
				</a>
				<span className={styles.shoppingCartCant} id='amount'>
					0
				</span>
			</div>
		</aside>
	);
};

export default SideBar;
