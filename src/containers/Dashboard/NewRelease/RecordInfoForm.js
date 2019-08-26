import React, { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';

import { NewReleaseContext } from './index';

export default () => {
	const {
		pagination,
		trackGenreChange,
		trackContributorsChange,
		trackFeaturedArtistChange,
		trackOutletStoresSelectionChange,
		trackReleaseChange,
	} = useContext(NewReleaseContext);
	if (pagination !== 3) return null;
	return (
		<div className="record-infoform">
			<label className="heading-6 font-weight--6 margin-bottom--1-5" htmlFor="genre-type">
				Select Genre
			</label>
			<select id="genre-type" name="type" required onChange={e => trackGenreChange(e.target.value)}>
				<option disabled defaultValue="	Select Genre">
					Select Genre
				</option>
				<option value="hiphop">Hiphop</option>
				<option value="rnb">RNB</option>
				<option value="blues">Blues</option>
				<option value="jazz">Jazz</option>
				<option value="hiphop">Rock</option>
				<option value="rnb">Spoken Word</option>
				<option value="blues">Vocal</option>
				<option value="jazz">World</option>
				<option value="other">other</option>
			</select>

			<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--2-4" htmlFor="genre-type">
				Release Type
			</label>
			<select id="genre-type" name="type" required onChange={e => trackReleaseChange(e.target.value)}>
				<option disabled defaultValue="	Select Genre">
					Select Release Type
				</option>
				<option value="hiphop">Album</option>
				<option value="rnb">Ep</option>
				<option value="blues">Single</option>
			</select>
			{/* <label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--2-4" htmlFor="track1">
				Enter Track Number
			</label>
			<div className="double-input">
				<input id="track1" type="text" placeholder="1" required />
				<p className="heading-6 font-weight--8">of</p>
				<input id="track2" type="text" placeholder="1" required />
			</div> */}
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--2-4" htmlFor="composer-name">
					Enter Featured Artist(s)
				</label>
				<input
					id="composer-name"
					type="text"
					placeholder="e.g artist1, artist2"
					onChange={e => trackContributorsChange(e.target.value)}
					required
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>Leave blank if this doesn’t apply</p>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label
					className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--2-4"
					htmlFor="contributors-name"
				>
					Enter other Contributors
				</label>
				<input
					id="contributors-name"
					type="text"
					placeholder="e.g contributor1, contributor2"
					onChange={e => trackFeaturedArtistChange(e.target.value)}
					required
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p> Please fill in producers, sound engineers and other individuals who worked on the song</p>
					</div>
				</div>
			</div>
			<label className="heading-6 font-weight--6 margin-bottom--1-5  margin-top--1-5" htmlFor="outlet">
				Choose outlet stores
			</label>
			<div className="selection-form margin-bottom--2-4">
				<input
					id="checkbox-apple"
					className="hide"
					type="checkbox"
					value="Apple Music"
					name="check"
					onChange={e => trackOutletStoresSelectionChange(e.target.value)}
				/>
				<input
					id="checkbox-deezer"
					className="hide"
					type="checkbox"
					value="deezer"
					name="check"
					onChange={e => trackOutletStoresSelectionChange(e.target.value)}
				/>
				<input
					id="checkbox-tidal"
					className="hide"
					type="checkbox"
					name="check"
					value="tidal"
					onChange={e => trackOutletStoresSelectionChange(e.target.value)}
				/>
				<input
					id="checkbox-spotify"
					className="hide"
					type="checkbox"
					name="check"
					value="spotify"
					onChange={e => trackOutletStoresSelectionChange(e.target.value)}
				/>
				<label htmlFor="checkbox-apple" className="radio--1 apple">
					<div>
						<span>A</span>
						Apple Music/iTunes
					</div>
					<FiCheck />
				</label>
				<label htmlFor="checkbox-deezer" className="radio--1 deezer">
					<div>
						<span>B</span>
						Deezer
					</div>
					<FiCheck />
				</label>
				<label htmlFor="checkbox-spotify" className="radio--1 spotify">
					<div>
						<span>C</span>
						Spotify
					</div>
					<FiCheck />
				</label>
				<label htmlFor="checkbox-tidal" className="radio--1 tidal">
					<div>
						<span>D</span>
						Tidal
					</div>
					<FiCheck />
				</label>
			</div>
		</div>
	);
};
