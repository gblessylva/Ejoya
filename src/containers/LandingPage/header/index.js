import React from 'react';

import NavBar from './Navbar';
import HeaderContent from './HeaderContent';

export default () => {
	return (
		<div className="header">
			<NavBar />
			<HeaderContent />
		</div>
	);
};
