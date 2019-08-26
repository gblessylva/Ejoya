import React from 'react';

export default () => {
	return (
		<footer className="footer">
			<div className="footer__logo-box">
				<img src="/inspect/ejoya-logo.png" alt="footer" className="footer__image" />
			</div>
			<h5 className="heading-5 text-grey letter-spread--1">Copyright Ejoya Ltd {new Date().getFullYear()} </h5>
		</footer>
	);
};
