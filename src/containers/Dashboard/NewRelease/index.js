import React, { Component, createContext } from 'react';
import PayStackBtn from 'react-paystack';
import { connect } from 'react-redux';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { GradientButton } from '../../sharedComponents';
import AlbumForm from './AlbumForm';
import ArtistForm from './ArtistForm';
import MetaDataForm from './MetaDataForm';
import RecordInfoForm from './RecordInfoForm';
import * as actions from '../../../actions/releaseActions';
import { handleNotitficationDisplayState } from '../../../actions/notificationActions';

export const NewReleaseContext = createContext();

let user = localStorage.getItem('authUser');

//pk_live_a5611793073881ce96d5c89a5d7951fbd1193737

class NewRelease extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pagination: 1,
			key: 'pk_test_bc3157bfacc8a187fe2b99451b644268f8f78907',
			amount: 200000,
			email: props.email || 'arausid@yahoo.com',
			errorHasOccured: false,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.pagination != this.state.pagination) {
			return true;
		} else if (nextState.errorHasOccured != this.state.errorHasOccured) {
			return true;
		} else {
			return false;
		}
	}

	// this checks for specific errors like entering the right dimension,and the right audio format
	trackErrorInForm = isErr => {
		this.setState({ errorHasOccured: isErr });
	};

	switchPage = page => {
		if (!this.state.errorHasOccured) {
			this.setState({ pagination: page });
		}
	};

	handleContinueClick = e => {
		const { pagination, errorHasOccured } = this.state;
		e.preventDefault();
		if (pagination < 4 && !errorHasOccured) {
			this.setState({ pagination: pagination + 1 });
		}
	};

	handleBackClick = e => {
		const { pagination } = this.state;
		e.preventDefault();
		if (pagination > 1) {
			this.setState({ pagination: pagination - 1 });
		}
	};

	handlePayment = e => {
		e.preventDefault();
		document.querySelector('.payButton').click();
	};

	callback = async response => {
		try {
			const {
				trackSubmissionAction,
				releaseAction,
				explicit_lyric,
				copyright_year,
				copyright_text,
				contributors,
				featured_artists,
				genre,
				consumer_release_date,
				original_release_date,
				publishing_house,
				upc_code,
				label,
				artwork,
				trackTitle,
				artistName,
				language,
				outlet_stores,
				audio_file,
				irc_code,
				release_type,
			} = this.props;
			if (response.status === 'success') {
				let fd = new FormData();
				fd.append('audio_file', audio_file);
				let trackResponse = await trackSubmissionAction(fd);
				if (trackResponse) {
					let formData = new FormData();
					let objData = {
						explicit_lyric,
						copyright_year,
						copyright_text,
						contributors,
						featured_artists,
						genre,
						consumer_release_date,
						original_release_date,
						publishing_house,
						upc_code,
						irc_code,
						label,
						release_type,
						cover_art: fd,
						title: trackTitle,
						artist: artistName,
						language,
						outlet_stores,
						cover_art: artwork,
						tracks: [trackResponse.id],
					};
					for (let key in objData) {
						formData.append(key, objData[key]);
					}
					let releaseResponse = await releaseAction(formData);
				}
			}
		} catch (err) {
			console.log('Error', err);
		}
	};

	close = () => {
		console.log('Payment closed');
	};

	render() {
		const { pagination, email, key, amount, errorHasOccured } = this.state;
		return (
			<NewReleaseContext.Provider value={{ ...this.props, pagination, reportError: this.trackErrorInForm }}>
				<section className="newrelease">
					<h3 className="heading-3 font-weight--3 line-height--1">Schedule a New Release</h3>
					<div className={`newrealease__progress-indicator pages-${pagination}`}>
						<span onClick={() => this.switchPage(1)} />
						<span onClick={() => this.switchPage(2)} />
						<span onClick={() => this.switchPage(3)} />
						<span onClick={() => this.switchPage(4)} />
					</div>

					{/* <span className="newrelease__arr-back" onClick={this.handleBackClick}>
						<IoIosArrowBack />
					</span> */}

					<ArtistForm />
					<AlbumForm />
					<MetaDataForm />
					<RecordInfoForm />
					<GradientButton
						onClickHandler={e => (pagination === 4 && this.handlePayment(e)) || this.handleContinueClick(e)}
						btnText={(pagination !== 4 && 'Continue') || 'Pay'}
						disabled={errorHasOccured}
					/>
					<PayStackBtn
						text="Make Payment"
						class="payButton"
						callback={this.callback}
						close={this.close}
						disabled={false}
						embed={false}
						email={email}
						amount={amount}
						paystackkey={key}
						tag="button"
					/>
				</section>
			</NewReleaseContext.Provider>
		);
	}
}

const mapStateToProps = ({
	signAuthReducer: { email },
	notificationReducer: { showNotification, notifymsg, lastNotificationTimer },
	releaseReducer: {
		track_upload_pending,
		track_upload_error,
		track,
		release_error,
		release_pending,
		release,
		explicit_lyric,
		audio_file,
		copyright_year,
		copyright_text,
		contributors,
		featured_artists,
		genre,
		consumer_release_date,
		original_release_date,
		publishing_house,
		upc_code,
		label,
		artwork,
		trackTitle,
		artistName,
		language,
		outlet_stores,
		irc_code,
		release_type,
	},
}) => ({
	track_upload_pending,
	track_upload_error,
	track,
	release_error,
	release_pending,
	release,
	explicit_lyric,
	audio_file,
	copyright_year,
	copyright_text,
	contributors,
	featured_artists,
	genre,
	consumer_release_date,
	original_release_date,
	publishing_house,
	upc_code,
	label,
	artwork,
	trackTitle,
	artistName,
	language,
	outlet_stores,
	showNotification,
	notifymsg,
	lastNotificationTimer,
	irc_code,
});

export default connect(
	mapStateToProps,
	{ ...actions, handleNotitficationDisplayState }
)(NewRelease);
