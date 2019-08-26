import React from 'react';

import { InputButton } from '../../sharedComponents';

export default () => {
	return (
		<div className="header__content">
			<div className="header__note-wrapper">
				<div className="header__content-text">
					<h1 className="heading-primary text-white">Distribute Your Music Globally without a Label.</h1>
					<p className="header__text">
						{' '}
						Take advantage of the internet to become the next big superstar. With Ejoya, you can upload and
						distribute your music globally & start earning instantly. Sign Up with your email to get started
					</p>
					<div className="input-btn-box">
						<InputButton inputClass="input-transparent" />
					</div>
				</div>
			</div>
			{/* <div className="header__content-image" /> */}
		</div>
	);
};
