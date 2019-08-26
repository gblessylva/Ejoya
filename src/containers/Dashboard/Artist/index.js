import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Line } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';

import { Carousel } from '../../sharedComponents';

export default class index extends Component {
	//#e5396b
	state = {
		lineData: {
			labels: ['Jan 15, 2017', '', '', 'Today'],
			yAxisID: 'bar-stacked',
			datasets: [
				{
					borderColor: '#F2F5F6',
					pointBorderColor: '#FFF',
					pointBackgroundColor: '#f2f5f6',
					pointBorderWidth: 2,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 1,
					pointRadius: 4,
					fill: true,

					borderWidth: 2,
					label: 'growth',
					// labels: {
					// 	// This more specific font property overrides the global property
					// 	fontColor: '#CCCCCC',
					// },
					data: [10, 30, 40, 100],
					tooltips: {
						mode: 'nearest',
					},
					backgroundColor: ['#FFEFD4'],
				},
				{
					pointBorderColor: '#FFF',
					pointBackgroundColor: '#f2f5f6',
					pointBorderWidth: 2,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 1,
					pointRadius: 4,
					fill: true,

					borderWidth: 2,
					label: 'growth',
					// labels: {
					// 	// This more specific font property overrides the global property
					// 	fontColor: '#CCCCCC',
					// },
					data: [20, 60, 80, 200],
					tooltips: {
						mode: 'nearest',
					},
					backgroundColor: ['#FFEDF3'],
					borderColor: ['#F2F5F6'],
				},
			],
		},
	};

	render() {
		const {
			match: { url },
		} = this.props;
		return (
			<div className="artist-homepage">
				 <div className="artist__info-display">
					<div className="artist__home-heading margin-bottom--4-3">
						<h3 className="heading-3 font-weight--3 line-height--1"> Your Progress </h3>
						<NavLink to={`${url}/artist/music-monitor`}>
							<button className="btn--dark heading-6 font-weight--6 artist__home-btn btn btn--animated">
								Monitor your Music
							</button>
						</NavLink>
					</div>
					<Carousel>
						<div>
							<div className="artist__stream--1">
								<p className="big-text font-weight--8">44k</p>
								<p className="subtitle line-height--2-9">Streams</p>
								<div className="artist__sub-text">
									<p className="heading-5-9 font-weight--3 line-height--1-5">Last Week</p>
									<IoIosArrowDown />
								</div>
							</div>
						</div>
						<div>
							<div className="artist__stream--2">
								<p className="big-text font-weight--8">10</p>
								<p className="subtitle  line-height--2-9">New Fans</p>
								<div className="artist__sub-text">
									<p className="heading-5-9 font-weight--3 line-height--1-5">Last Week</p>
									<IoIosArrowDown />
								</div>
							</div>
						</div>
						<div>
							<div className="artist__stream--3">
								<div className="itunes-box" />
								<p className="subtitle  line-height--2-9">Apple Music</p>
								<p className="artist__sub-text">Best performing platform</p>
							</div>
						</div>
						<div>
							<div className="artist__stream--4">
								<div className="stream__bg" />
								<p className="heading-5-9 font-weight--3 line-height--1-5">Most streamed</p>
							</div>
						</div>
					</Carousel>
				</div>
				<div className="artist-content">
					<h3 className="heading-3 font-weight--3 line-height--1 margin-bottom--2-4"> Your Evolution </h3>
					<div className="growth__stats">
						<p className="heading-5-9 font-weight--8 line-height--1-5">
							You have grown 40% since your last release
						</p>
						<div className="growth-chart">
							<Line
								data={this.state.lineData}
								options={{
									maintainAspectRatio: false,
									legend: {
										display: false,
										grid: false,
									},
									scales: {
										xAxes: [
											{
												gridLines: {
													drawOnChartArea: false,
												},
											},
										],
										yAxes: [
											{
												display: false,
												gridLines: {
													drawOnChartArea: false,
												},
											},
										],
									},
								}}
							/>
						</div>
						<div className="growth-chart__legend heading-5-9 font-weight--3 line-height--1-5">
							<div>
								<span>&nbsp;</span>
								Apple Music
							</div>
							<div>
								<span>&nbsp;</span>
								Spotify
							</div>
							<div>
								<span>&nbsp;</span>
								Sound Cloud
							</div>
							<div>
								<span>&nbsp;</span>
								Tidal
							</div>
						</div>
					</div>
					<div className="regional_stats">
						<div className="regional_stats-img" />
						<p className="heading-5-9 font-weight--8">Nigeria</p>
						<p className="heading-5-9 font-weight--3 line-height--1-5">Biggest playing region</p>
					</div>
				</div>
			</div>
		);
	}
}
