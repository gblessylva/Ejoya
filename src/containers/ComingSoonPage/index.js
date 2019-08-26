import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ mainTxt, bgClass, introTxt, page }) => {
	return (
		<section className={(mainTxt && 'maintenance comingsoon') || 'comingsoon'}>
			<div className="upload-music-btn-box">
				<NavLink to="/dashboard/artist/new-release">
					<button className="btn btn-primary">Upload Music</button>
				</NavLink>
			</div>
			<div className="comingsoon__header">
				<div className={bgClass} />
				<div className="comingsoon_info-text">
					<p>{(mainTxt && `${page} ${mainTxt.substring(4)}`) || introTxt}</p>
				</div>
				<div className="ejoya__supported-platforms">
					<ul>
						<li>
							<img src="/inspect/spotify_logo.png" alt="spotify" />
						</li>
						<li>
							<img src="/inspect/youtube.png" alt="youtube" />
						</li>
						<li>
							<img src="/inspect/tidal.png" alt="tidal" />
						</li>
						<li>
							<img src="/inspect/google.png" alt="google" />
						</li>
						<li>
							<img src="/inspect/deezer.png" alt="deezer" />
						</li>
					</ul>
				</div>
			</div>

			{!mainTxt && (
				<>
					<div className="ejoya__pricing-plan">
						<p>Marketing Plans</p>
						<div className="ejoya__pricing-plan-box">
							<div className="basic">
								<div className="basic-wrapper">
									<p>Basic Plan</p>
									<ul className="plan-list">
										<li>Social Media*</li>
										<li>Playlist Pitching</li>
										<li>Digital Adverts</li>
										<li>Radio</li>
										<li>Digital Ad Placement</li>
										<li>Newspaper</li>
										<li>Indoor Screens</li>
										<li>Billboards</li>
									</ul>
									<p className="plan-price">$100</p>
								</div>
								<button className="btn btn-secondary btn--animated">Select Plan</button>
							</div>
							<div className="mid">
								<div className="mid-wrapper">
									<p>Mid Plan</p>
									<ul className="plan-list">
										<li>Social Media*</li>
										<li>Playlist Pitching</li>
										<li>Digital Adverts</li>
										<li>Radio</li>
										<li>Digital Ad Placement</li>
										<li>Newspaper</li>
										<li>Indoor Screens</li>
										<li>Billboards</li>
									</ul>
									<p className="plan-price">$100</p>
								</div>
								<button className="btn btn-secondary btn--animated">Select Plan</button>
							</div>
							<div className="pro">
								<div className="pro-wrapper">
									<p>Pro Plan</p>
									<ul className="plan-list">
										<li>Social Media*</li>
										<li>Playlist Pitching</li>
										<li>Digital Adverts</li>
										<li>Radio</li>
										<li>Digital Ad Placement</li>
										<li>Newspaper</li>
										<li>Indoor Screens</li>
										<li>Billboards</li>
									</ul>
									<p className="plan-price">$100</p>
								</div>
								<button className="btn btn-secondary btn--animated">Select Plan</button>
							</div>
						</div>
					</div>
					<div className="contact-us">
						<p>
							{' '}
							We also offer custom marketing solutions <br /> for our artist, reach out to us below{' '}
						</p>
						<a
							href="mailto:ayo@ejoyamusic.com?subject=Request Custom Plan"
							className="btn btn-secondary btn--animated"
						>
							Request a Custom Plan
						</a>
					</div>
				</>
			)}
		</section>
	);
};
