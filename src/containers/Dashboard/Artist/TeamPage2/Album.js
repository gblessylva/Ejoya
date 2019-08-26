import React from 'react';

export default function Album() {
	return (
		<div className="album-wrapper">
			<div className="album__partition">
				<div className="album__box">
					<div className="album__info">
						<div className="album-cover">
							{/* <img src="/inspect/music-cover.jpg" alt="" /> */}
						</div>
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
					<div className="tracks-list-box">
						<p>Tracks</p>
						<div className="track-list">
							<div className="tracks-item">
								<div className="track-avatar">
									<img src="/inspect/avatar.jpg" />
								</div>
								<p>Miles High</p>
								<p>3:15</p>
								<button className="market__btn btn--animated">Market</button>
							</div>
							<div className="tracks-item">
								<div className="track-avatar">
									<img src="/inspect/react-god.jpg" />
								</div>
								<p>Sunflower</p>
								<p>3:15</p>
								<button className="market__btn btn--animated">Market</button>
							</div>
							<div className="tracks-item">
								<div className="track-avatar">
									<img src="/inspect/avatar.jpg" />
								</div>
								<p>Please Don't kill My Vibe</p>
								<p>3:15</p>
								<button className="market__btn btn--animated">Market</button>
							</div>
						</div>
					</div>
				</div>
				<div className="album-select">
					<div className="multiple-selection">
						<span />
						<span />
						<span />
					</div>
				</div>
			</div>
		</div>
	);
}
