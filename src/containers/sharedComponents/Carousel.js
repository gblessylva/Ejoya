import React, { useEffect } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

export default ({ children }) => {
	let divs;
	/** potential bug, memory leak...
	 * renders every time and is related to another bug with the sidebar
	 **/
	useEffect(() => {
		divs = document.querySelectorAll('.carousel>div');
		divs.forEach((div, i) => div.setAttribute('aniId', i));
	});

	const performCarouselAction = () => {
		if (divs) {
			let lastBoxId = divs.length - 1;
			divs.forEach(div => {
				div.setAttribute('class', '');
				let aniId = Number(div.getAttribute('aniId'));
				if (aniId === lastBoxId) {
					div.setAttribute('aniId', 0);
					div.classList.add('lastbox');
				} else {
					div.setAttribute('aniId', aniId + 1);
					div.classList.add('move-x');
				}
			});
		}
	};

	return (
		<div className="carousel-box">
			<div className="carousel">
				{children}
				<span className="carousel__arr-front" onClick={() => performCarouselAction()}>
					<IoMdArrowForward />
				</span>
			</div>
		</div>
	);
};
