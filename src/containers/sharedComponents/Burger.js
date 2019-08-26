import React from 'react';

export default ({ toggleSideBar, sideBarShown }) => {
	return (
		<div
			htmlFor="burger__id"
			className={(sideBarShown && 'burger cross') || 'burger'}
			onClick={() => toggleSideBar()}
		>
			<span />
		</div>
	);
};
