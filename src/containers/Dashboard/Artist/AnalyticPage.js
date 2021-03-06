import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

class FanPage extends Component {
	render() {
		return (
			<main className="fanpage">
				<section className="superfans">
					<div className="superfans__heading">
						<h3 className="heading-3 font-weight--3 line-height--1">Your Superfans</h3>
						<p className="heading-5-9 font-weight--3 line-height--1-5">
							Last week <IoIosArrowDown />
						</p>
						<button className="btn--dark heading-6 font-weight--6 artist__home-btn btn btn--animated">
							<span />
							Connect Accounts
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
				<section className="follwer-activity">
					<h3 className="heading-3 font-weight--3 line-height--1">Follwer Activity</h3>
					<div className="superfans__fan-box">
						<div className="fan-box__item">
							<p className="big-text font-weight--8">+924</p>
							<h4 className="fan-box__username heading-7 font-weight--3">12k followers</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Facebook</p>
							</div>
						</div>
						<div className="fan-box__item">
							<p className="big-text font-weight--8">+924</p>
							<h4 className="fan-box__username heading-7 font-weight--3">12k followers</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Twitter</p>
							</div>
						</div>
						<div className="fan-box__item">
							<p className="big-text font-weight--8">+924</p>
							<h4 className="fan-box__username heading-7 font-weight--3">12k followers</h4>
							<div className="fan-box__social-box">
								<span />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Instagram</p>
							</div>
						</div>
						<div className="fan-box__item">
							<p className="big-text font-weight--8">+924</p>
							<h4 className="fan-box__username heading-7 font-weight--3">12k followers</h4>
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

export default FanPage;
