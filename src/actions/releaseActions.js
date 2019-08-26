import axios from 'axios';
import {
	ARTIST_NAME_CHANGE,
	TRACK_TITLE_CHANGE,
	TRACK_ARTWORK_CHANGE,
	TRACK_LABEL_CHANGE,
	TRACK_UPC_CODE_CHANGE,
	TRACK_IRC_CODE_CHANGE,
	TRACK_PUBLISHING_HOUSE_CHANGE,
	TRACK_ORIGINAL_RELEASE_DATE_CHANGE,
	TRACK_CONSUMER_RELEASE_DATE,
	TRACK_GENRE_CHANGE,
	TRACK_CONTRIBUTORS_CHANGE,
	TRACK_FEATURED_ARTISTS_CHANGE,
	TRACK_OUTLET_STORES_SELECTION,
	TRACK_LANGUAGE_CHANGE,
	TRACK_EXPLICIT_LYRIC_CHANGE,
	TRACK_COPYRIGHT_YEAR,
	TRACK_COPYRIGHT_TEXT,
	TRACK_AUDIO_FILE_WAV,
	TRACK_SUBMISSION_FAILURE,
	TRACK_SUBMISSION_PENDING,
	TRACK_SUBMISSION_SUCCESS,
	RELEASE_PENDING,
	RELEASE_FAILURE,
	RELEASE_SUCCESS,
	UPLOAD_PROGRESS_UPATE,
	TRACK_RELEASE_TYPE_CHANGE,
} from './types';
import Ejoya from '../configs/httpConfig';
import { handleNotitficationDisplayState } from './notificationActions';

export const artistNameChange = payload => ({ type: ARTIST_NAME_CHANGE, payload });
export const trackTitleChange = payload => ({ type: TRACK_TITLE_CHANGE, payload });
export const trackArtWorkChange = payload => ({ type: TRACK_ARTWORK_CHANGE, payload });
export const trackLabelChange = payload => ({ type: TRACK_LABEL_CHANGE, payload });
export const trackUpcCodeChange = payload => ({ type: TRACK_UPC_CODE_CHANGE, payload });
export const trackIrcCodeChange = payload => ({ type: TRACK_IRC_CODE_CHANGE, payload });
export const trackPublishingHouseChange = payload => ({ type: TRACK_PUBLISHING_HOUSE_CHANGE, payload });
export const trackOriginalReleaseChange = payload => ({ type: TRACK_ORIGINAL_RELEASE_DATE_CHANGE, payload });
export const trackConsumerReleaseChange = payload => ({ type: TRACK_CONSUMER_RELEASE_DATE, payload });
export const trackGenreChange = payload => ({ type: TRACK_GENRE_CHANGE, payload });
export const trackContributorsChange = payload => ({ type: TRACK_CONTRIBUTORS_CHANGE, payload });
export const trackFeaturedArtistChange = payload => ({ type: TRACK_FEATURED_ARTISTS_CHANGE, payload });
export const trackOutletStoresSelectionChange = payload => ({ type: TRACK_OUTLET_STORES_SELECTION, payload });
export const trackLanguageChange = payload => ({ type: TRACK_LANGUAGE_CHANGE, payload });
export const trackExplicitChange = payload => ({ type: TRACK_EXPLICIT_LYRIC_CHANGE, payload });
export const trackCopyrightTextChange = payload => ({ type: TRACK_COPYRIGHT_TEXT, payload });
export const trackCopyrightYearChange = payload => ({ type: TRACK_COPYRIGHT_YEAR, payload });
export const trackAudioFileWavChange = payload => ({ type: TRACK_AUDIO_FILE_WAV, payload });
export const trackReleaseChange = payload => ({ type: TRACK_RELEASE_TYPE_CHANGE, payload });
export const trackSubmissionAction = payload => async dispatch => {
	let config = {
		onUploadProgress: function(progressEvent) {
			var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			dispatch(uploadProgress({ percentage: percentCompleted, uploadSize: progressEvent.total }));
			if (percentCompleted === 100) {
				dispatch(handleNotitficationDisplayState('Track was successfully uploaded'));
			}
		},
	};
	try {
		dispatch({ type: TRACK_SUBMISSION_PENDING });
		let trackResponse = await Ejoya.post('/tracks/', payload, config);
		console.log(trackResponse);
		if (trackResponse.data) {
			dispatch({ type: TRACK_SUBMISSION_SUCCESS, payload: trackResponse.data });
			return trackResponse.data;
		}
	} catch (err) {
		dispatch({ type: TRACK_SUBMISSION_FAILURE, payload: err });
	}
};

export const releaseAction = payload => async dispatch => {
	try {
		dispatch({ type: RELEASE_PENDING });
		let releaseResponse = await Ejoya.post('/releases/', payload);
		if (releaseResponse) {
			dispatch({ type: RELEASE_SUCCESS, payload: releaseResponse.data });
			return releaseResponse.data;
		}
	} catch (err) {
		dispatch({ type: RELEASE_FAILURE, payload: 'Could not send release successfully' });
	}
};

export const uploadProgress = payload => ({ type: UPLOAD_PROGRESS_UPATE, payload });
