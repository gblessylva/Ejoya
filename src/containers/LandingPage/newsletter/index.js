import React from 'react';

import InputButton from '../../sharedComponents/InputButton';

export default () => {
	return (
		<section className="newsletter">
			<div className="newsletter__content">
				<h1 className="heading-primary text-white">Start Distributing and Earning </h1>
				<h5 className="heading-5 text-white letter-spread--2"> Sign Up for Early Access here</h5>
				<div className="newsletter__input">
					<InputButton inputClass="input-white" />
				</div>
			</div>
		</section>
	);
};
