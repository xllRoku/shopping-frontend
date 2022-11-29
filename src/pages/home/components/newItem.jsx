import styles from './NewItem.module.css';

const NewItem = () => {
	return (
		<section className={styles.addItemContainer}>
			<form action='' className={styles.loginForm} id='login-form'>
				<h1 className={styles.formTitle}>Add a new item</h1>
				<label for='item-name' className={styles.formInput}>
					Name
					<input
						type='text'
						id='item-name'
						className={styles.inputBox}
						name='item-name'
						placeholder='Enter a name'
					/>
				</label>
				<label for='note' className={styles.formInput}>
					Note (Optional)
					<textarea
						rows='4'
						cols='1'
						type='text'
						id='note'
						className={styles.inputBox}
						name='note'
						placeholder='Enter a note'
					></textarea>
				</label>
				<label for='image' className={styles.formInput}>
					Image (Optional)
					<input
						type='url'
						id='image'
						className={styles.inputBox}
						name='image'
						placeholder='Enter a url'
					/>
				</label>
				<label for='category' className={styles.formInput}>
					Category
					<select
						id='category'
						className={`${styles.select} ${styles.inputBox}`}
						name='category'
					>
						<option className={styles.option} value='default'>
							Enter a category
						</option>
						<option
							className={styles.option}
							value='Fruit and Vegetables'
						>
							Fruit and Vegetables
						</option>
						<option className={styles.option} value='Meat and Fish'>
							Meat and Fish
						</option>
						<option className={styles.option} value='Beverages'>
							Beverages
						</option>
					</select>
				</label>
				<div className={styles.buttons}>
					<div>
						<input
							type='button'
							value='Cancel'
							className={`${styles.sectionBtn} ${styles.cancelBtn}`}
							id='cancel-btn'
						/>
						<input
							type='button'
							value='Save'
							className={`${styles.sectionBtn} ${styles.saveBtn}`}
							id='save-btn'
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default NewItem;
