import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import GradientButton from './GradientButton';
import { handleNotitficationDisplayState } from '../../actions/notificationActions';

class UploadTracker extends Component {
	state = {
		closeModal: false,
	};
	render() {
		const {
			uploadObjState: { percentage, uploadSize },
			handleNotitficationDisplayState,
		} = this.props;
		if (percentage === 0 || this.state.closeModal) return null;
		return (
			<div className="upload-tracker">
				<div className="backdrop" />
				<div className="upload-tracker-box">
					<p className="upload-tracker__title">Upload progress</p>
					{(percentage < 100 && (
						<div className="upload-tracker__chart">
							<Doughnut
								data={{
									// labels: ['Male', 'Female'],
									datasets: [
										{
											data: [percentage, 100 - percentage],
											backgroundColor: ['#FF5660', '#dfe7ea'],
										},
									],
								}}
								options={{
									maintainAspectRatio: false,
									legend: {
										display: false,
									},
									tooltips: {
										enabled: false,
									},
								}}
							/>
							<div className="upload-tracker__percentage">
								<p className="percentage-value">{percentage}%</p>
							</div>
						</div>
					)) || (
						<div className="upload-success__box">
							<p className="heading-6-1"> Upload successful</p>
							<GradientButton
								btnText="continue"
								onClickHandler={() => {
									this.setState({ closeModal: true });
									handleNotitficationDisplayState('Upload Successful');
								}}
							/>
						</div>
					)}

					<div className="upload-tracker__size-info-box">
						<p className="upload-tracker__size-info">
							{' '}
							{Math.floor(uploadSize / percentage)} of {uploadSize}KB
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(({ releaseReducer: { uploadObjState } }) => ({
	uploadObjState,
	handleNotitficationDisplayState,
}))(UploadTracker);
