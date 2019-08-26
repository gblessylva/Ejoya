import React, { useContext, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import { NewReleaseContext } from './index';

export default () => {
	const {
		pagination,
		trackLanguageChange,
		trackExplicitChange,
		trackCopyrightTextChange,
		trackCopyrightYearChange,
		trackAudioFileWavChange,
		audio_file,
		handleNotitficationDisplayState,
		reportError,
	} = useContext(NewReleaseContext);

	const [songTitle, setSongTitle] = useState('');
	const [audioTypeError, setAudioTypeError] = useState('');
	const [count, setCount] = useState(0);

	if (pagination !== 4) return null;
	return (
		<div className="metadata-form">
			<label className="heading-6 font-weight--6 margin-bottom--1-5" htmlFor="language-type">
				Language
			</label>
			<select id="language-type" name="type" onChange={e => trackLanguageChange(e.target.value)} required>
				<option disabled defaultValue="	Select Language">
					Select Language of Performance
				</option>
				<option value="english">English</option>
				<option value="french">French</option>
				<option value="pakistan">Pakistan</option>
				<option value="china">China</option>
				<option value="other">other</option>
			</select>
			<div className="form-group">
				<label
					id="explicit-words"
					className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--2-4"
					htmlFor="explicit"
				>
					Does the song contain Explicit lyrics
				</label>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>Remove words like f**k,shit e.tc</p>
					</div>
				</div>
				<div className="input-radio--1-group">
					<input
						id="radio-1"
						type="radio"
						className="hide"
						required
						name="same"
						onChange={e => trackExplicitChange(true)}
					/>
					<input
						id="radio-2"
						type="radio"
						className="hide"
						required
						name="same"
						onChange={e => trackExplicitChange(false)}
					/>
					<label htmlFor="radio-1" className="radio--1 radio-yes">
						<div>
							<span>Y</span>
							Yes
						</div>
						<FiCheck />
					</label>
					<label htmlFor="radio-2" className="radio--1 radio-no">
						<div>
							<span>N</span>
							No
						</div>
						<FiCheck />
					</label>
				</div>
			</div>
			<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--2-4" htmlFor="track1">
				Copyrights Year & Copyrights Text
			</label>
			<div className="double-input">
				<input
					id="track1"
					type="number"
					placeholder="Year"
					onChange={e => trackCopyrightYearChange(e.target.value)}
					required
				/>
				<p className="heading-6 font-weight--8">with</p>
				<input
					id="track2"
					type="text"
					placeholder="Text"
					onChange={e => trackCopyrightTextChange(e.target.value)}
					required
				/>
			</div>
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--2-4" htmlFor="upload-track">
					Upload Song
				</label>
				<input
					id="upload-track"
					type="file"
					placeholder="100"
					className="hide"
					onChange={e => {
						setSongTitle(e.target.files[0].name);
						if (e.target.files[0].type.includes('wav')) {
							trackAudioFileWavChange(e.target.files[0]);
							reportError(false);
							setCount(count => count + 1);
							setAudioTypeError(`success-${count}`);
						} else {
							setCount(count => count + 1);
							reportError(true);
							setAudioTypeError('');
							setTimeout(() => setAudioTypeError(`error-${count}`), 1000);
						}
					}}
					accept="audio/wave,audio/wav,audio/x-wav,audio/x-pn-wav"
					required
				/>
				<label
					id="upload-box"
					htmlFor="upload-track"
					className={`${audioTypeError} upload-track heading-6 font-weight--3 font-italic margin-bottom--2-4`}
				>
					<p>{songTitle || 'Upload Track (.wav)'}</p>
				</label>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>audio must be in .wav format</p>
					</div>
				</div>
			</div>
		</div>
	);
};
