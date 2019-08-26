import React, { Component } from 'react';

export default class TeamPage extends Component {
	render() {
		return (
			<main className="teampage">
				<section>
					<div className="teampage__heading">
						<h3 className="heading-3 font-weight--3 line-height--1">Your Team</h3>
						<button className="btn--dark heading-6 font-weight--6 artist__home-btn btn btn--animated">
							<span />
							Add a Team Member
						</button>
					</div>
					<div className="superfans__fan-box">
						<div className="fan-box__item">
							<div className="fan-box__img">
								<img src="/inspect/react-god.jpg" alt="fan-pic" />
							</div>
							<h4 className="fan-box__username heading-7 font-weight--3">@react_god</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Facebook</p>
							</div>
						</div>
						<div className="fan-box__item">
							<div className="fan-box__img">
								<img src="/inspect/img_brian.jpg" alt="fan-pic" />
							</div>
							<h4 className="fan-box__username heading-7 font-weight--3">@stormzy</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Twitter</p>
							</div>
						</div>
						<div className="fan-box__item">
							<div className="fan-box__img">
								<img src="/inspect/img_danielle.jpg" alt="fan-pic" />
							</div>
							<h4 className="fan-box__username heading-7 font-weight--3">@tremzy</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Instagram</p>
							</div>
						</div>
						<div className="fan-box__item">
							<div className="fan-box__img">
								<img src="/inspect/img_lisa.jpg" alt="fan-pic" />
							</div>
							<h4 className="fan-box__username heading-7 font-weight--3">@ajoks</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">EjoyaLink</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
}
