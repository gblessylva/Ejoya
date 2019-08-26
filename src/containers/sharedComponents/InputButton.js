import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default ({ inputClass }) => {
	return (
		<div className="inputbutton">
			<input
				className={`header__form-input ${inputClass}`}
				type="email"
				placeholder="what's your email address"
				required
			/>
			<button className="btn header__form-btn">
				<IoIosArrowRoundForward className="inputbutton__icon" />
			</button>
		</div>
	);
};
