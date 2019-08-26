import React from 'react';

export default () => {
	return (
		<section className="socials-payment">
			<div className="socials">
				{/* borrowed style from upload-section styles */}
				<div className="socials-img">
					<img src="/inspect/social.png" alt="socials-pic" />
				</div>
				<div className="upload-section__info">
					<div className="upload__textbox">
						<h1 className="heading-primary text-white">See who's cheering you the most.</h1>
						<p className="upload-section__text">
							{' '}
							Take advantage of the internet to become the next big superstar. With Ejoya, you can upload
							and distribute your music globally & start earning instantly. Sign Up with your email to get
							started
						</p>
					</div>
				</div>
			</div>
			<div className="payment">
				<div className="socials-img">
					<img src="/inspect/upload.png" alt="socials-pic" />
				</div>
				<div className="upload-section__info">
					<div className="upload__textbox">
						<h1 className="heading-primary text-white">Get Paid and Collect Earnings from all Platforms</h1>
						<p className="upload-section__text">
							{' '}
							Take advantage of the internet to become the next big superstar. With Ejoya, you can upload
							and distribute your music globally & start earning instantly. Sign Up with your email to get
							started
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
