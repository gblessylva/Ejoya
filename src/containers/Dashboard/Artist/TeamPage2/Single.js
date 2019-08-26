import React from 'react';

export default function Single() {
	return (
		<div className="singles">
			<div className="album__info">
				<div className="album-cover" />
				<div className="album-title">
					<h3 className="">Now You See me</h3>
					<p>Released 10/10/2018</p>
				</div>
				<div className="album_plays">
					<p>20,000</p>
					<p>Plays</p>
				</div>
				<div className="album_amount-made">
					<p>$2200</p>
					<p>Amount made</p>
				</div>
				<div className="album_plays2">
					<p>100,000</p>
					<p>Plays</p>
				</div>
				<div className="album_likes">
					<p>200</p>
					<p>Likes</p>
				</div>
				<button className="market__btn btn--animated">Market</button>
			</div>
			<div className="album-select">
				<div className="multiple-selection">
					<span />
					<span />
					<span />
				</div>
			</div>
		</div>
	);
}
