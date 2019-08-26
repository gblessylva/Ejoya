import React from 'react';

export default ({ btnText, onClickHandler, disabled }) => {
	return (
		<button className="btn gradient-btn btn--animated" onClick={onClickHandler} disabled={disabled}>
			{btnText}
		</button>
	);
};
