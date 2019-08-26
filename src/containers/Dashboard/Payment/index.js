import React from 'react';
import { GoCheck } from 'react-icons/go';

export default () => {
	return (
		<div className="payment-plan-box">
			<div className="payment__header">
				<h3 className="heading-3 font-weight--3 line-height--1">Payment Plan</h3>
				<button className="btn--animated">Continue</button>
			</div>
			<div className="payment__body">
				<div className="payment__plan-box">
					<div className="payment__options">
						<ul>
							<li>Choose a marketing plan</li>
							<li>Social Media </li>
							<li>Playlist Pitching</li>
							<li>Digital Adverts</li>
							<li>Radio</li>
							<li>Digital Ad Placement</li>
							<li>Newspaper</li>
							<li>Indoor Screens</li>
							<li>Billboards</li>
						</ul>
					</div>
					<div className="plan-basic">
						<ul>
							<li>Basic</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
						</ul>
						<div className="plan-basic__price">
							<p>$100</p>
						</div>
					</div>
					<div className="plan-medium">
						<ul>
							<li>Mid</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
						</ul>
						<div className="plan-mid__price">
							<p>$900</p>
						</div>
					</div>
					<div className="plan-pro">
						<ul>
							<li>Pro</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
							<li>
								<GoCheck />
							</li>
						</ul>
						<div className="plan-pro__price">
							<p>$2500</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
