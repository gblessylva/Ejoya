import React, { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';

import { NewReleaseContext } from './index';

export default () => {
	const {
		pagination,
		trackLabelChange,
		trackUpcCodeChange,
		trackPublishingHouseChange,
		trackOriginalReleaseChange,
		trackConsumerReleaseChange,
		trackIrcCodeChange,
	} = useContext(NewReleaseContext);

	if (pagination !== 2) return null;
	return (
		<div className="album-form">
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5" htmlFor="label-name">
					Name of Label
				</label>
				<input
					id="label-name"
					type="text"
					placeholder="Enter Label Name"
					onChange={e => trackLabelChange(e.target.value)}
					required
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>if you don't have fill in independent</p>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--1-5" htmlFor="upc-code">
					UPC code
				</label>
				<input
					id="upc-code"
					type="text"
					placeholder="Enter UPC code"
					onChange={e => trackUpcCodeChange(e.target.value)}
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>Don't worry if you don't have one</p>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--1-5" htmlFor="upc-code">
					IRC code
				</label>
				<input
					id="irc-code"
					type="text"
					placeholder="Enter IRC code"
					onChange={e => trackIrcCodeChange(e.target.value)}
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>Leave this field blank if you cannot provide this and we will provide one for you 😊</p>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--1-5" htmlFor="publish-house">
					Publishing House
				</label>
				<input
					id="publish-house"
					type="text"
					placeholder="Enter Publishing House"
					onChange={e => trackPublishingHouseChange(e.target.value)}
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p> if you do not have a publishing house, please fill in your full name</p>
					</div>
				</div>
			</div>
			<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--1-5" htmlFor="">
				Is this a re-release ?
			</label>
			<input id="release-radio-1" type="radio" className="hide" required name="release" />
			<input id="release-radio-2" type="radio" className="hide" required name="release" />
			<div className="input-radio--1-group margin-bottom--1-5">
				<label htmlFor="release-radio-1" className="radio--1 radio-yes">
					<div>
						<span>Y</span>
						Yes
					</div>
					<FiCheck />
				</label>
				<label htmlFor="release-radio-2" className="radio--1 radio-no">
					<div>
						<span>N</span>
						No
					</div>
					<FiCheck />
				</label>
			</div>
			<div className="consumer-release">
				<label
					className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--2-4"
					htmlFor="album-consumerdate"
				>
					Consumer Release Date
				</label>
				<input
					id="album-consumerdate"
					type="date"
					placeholder="Enter consumer release date"
					onChange={e => trackConsumerReleaseChange(e.target.value)}
					required
				/>
			</div>
			<div className="original-release">
				<label
					className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--2-4"
					htmlFor="album-originaldate"
				>
					Original Release Date
				</label>
				<input
					id="album-originaldate"
					type="date"
					placeholder="Enter original release date"
					className="margin-bottom--2-4"
					onChange={e => trackOriginalReleaseChange(e.target.value)}
					required
				/>
			</div>
		</div>
	);
};
