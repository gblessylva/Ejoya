import React, { useContext, useState, useRef, useEffect } from 'react';
import { FiFileText } from 'react-icons/fi';

import { NewReleaseContext } from './index';

export default () => {
	const { pagination, trackArtWorkChange, trackTitleChange, artistNameChange, reportError } = useContext(
		NewReleaseContext
	);
	const [count, setCount] = useState(0);
	const [imageSrc, setImageSrc] = useState('');
	const [imageErr, setImageErr] = useState('');
	const uploadPanelRef = useRef();

	const imageSwitcher = file => {
		if (file) {
			let imageReader = new FileReader();

			imageReader.onload = e => {
				setImageSrc(imageReader.result);
				let img = new Image();

				img.onload = () => {
					verifyRightImageSize(img.height, img.width);
				};
				img.src = imageReader.result;
			};
			imageReader.readAsDataURL(file);
		}
	};

	const verifyRightImageSize = (height, width) => {
		if (height === 1400 && width === 1400) {
			setImageErr(`success-${count + 1}`);
			reportError(false);
			setCount(count => count + 1);
		} else {
			setImageErr(`error-${count + 1}`);
			reportError(true);
			setCount(count => count + 1);
		}
	};

	if (pagination !== 1) return null;
	return (
		<div className="artist-form">
			<div className="form-group">
				<label className="heading-6 font-weight--6 margin-bottom--1-5" htmlFor="artist-name">
					Stage Name
				</label>
				<input
					id="artist-name"
					type="text"
					placeholder="Enter Stage Name"
					onChange={e => artistNameChange(e.target.value)}
					required
				/>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>
							Artist name should be the same with your name on your existing releases,if it applies Add
							artwork
						</p>
					</div>
				</div>
			</div>
			<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--1-5" htmlFor="song-title">
				Song Title
			</label>
			<input
				id="song-title"
				type="text"
				placeholder="Enter Song Title"
				onChange={e => trackTitleChange(e.target.value)}
				required
			/>
			<label className="heading-6 font-weight--6 margin-bottom--1-5 margin-top--1-5" htmlFor="add-artwork">
				Add Artwork
			</label>
			<input
				type="file"
				className="hide"
				id="add-artwork"
				onChange={e => {
					setImageErr('');
					imageSwitcher(e.target.files[0]);
					trackArtWorkChange(e.target.files[0]);
				}}
				required
			/>
			<div className="form-group">
				<div id="uploadpanel" ref={uploadPanelRef} className={`uploadpanel ${imageErr}`}>
					{imageSrc && (
						<label htmlFor="add-artwork" className="backdrop">
							<FiFileText />
						</label>
					)}
					{imageSrc && <img src={imageSrc} alt="art-pic" className="upload-image" />}
					<label htmlFor="add-artwork" className="heading-6 font-weight--3 font-italic add-artwork">
						Upload Artwork
					</label>
				</div>
				<div className="tooltip right">
					<span />
					<div className="tooltip__text">
						<p>size of the image must be 1400 * 1400</p>
					</div>
				</div>
			</div>
		</div>
	);
};
