import React from 'react';
import InputText from '../../../components/inputs/input-text';

const NewItem = () => {
	return (
		<section class='add-item-container'>
			<form action='' class='login-form' id='login-form'>
				<h1 class='form-title'>Add a new item</h1>
				<label for='item-name' class='form-input'>
					Name
					<input
						type='text'
						id='item-name'
						class='input-box'
						name='item-name'
						placeholder='Enter a name'
					/>
				</label>
				<label for='note' class='form-input'>
					Note (Optional)
					<textarea
						rows='4'
						cols='1'
						type='text'
						id='note'
						class='input-box'
						name='note'
						placeholder='Enter a note'
					></textarea>
				</label>
				<label for='image' class='form-input'>
					Image (Optional)
					<input
						type='url'
						id='image'
						class='input-box'
						name='image'
						placeholder='Enter a url'
					/>
				</label>
				<label for='category' class='form-input'>
					Category
					<select
						id='category'
						class='select input-box'
						name='category'
					>
						<option class='option' value='default'>
							Enter a category
						</option>
						<option class='option' value='Fruit and Vegetables'>
							Fruit and Vegetables
						</option>
						<option class='option' value='Meat and Fish'>
							Meat and Fish
						</option>
						<option class='option' value='Beverages'>
							Beverages
						</option>
					</select>
				</label>
				<div class='buttons'>
					<input
						type='button'
						value='Cancel'
						class='section-btn cancel-btn'
						id='cancel-btn'
					/>
					<input
						type='button'
						value='Save'
						class='section-btn save-btn'
						id='save-btn'
					/>
				</div>
			</form>
		</section>
	);
};

export default NewItem;
