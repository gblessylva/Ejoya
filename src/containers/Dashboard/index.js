import React, { Component, useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { FiArrowRightCircle, FiTarget } from 'react-icons/fi';
import { connect } from 'react-redux';

import NewRelease from './NewRelease';
import ArtistHome from './Artist';
import ArtistFanPage from './Artist/AnalyticPage';
// import TeamPage from './Artist/TeamPage';
import TeamPage2 from './Artist/TeamPage2';
import MusicMonitor from './Artist/MusicMonitor';
import Payment from './Payment';
import Burger from '../sharedComponents/Burger';
import ComingSoon from '../ComingSoonPage';
import { handleNotitficationDisplayState } from '../../actions/notificationActions';

const offerInfoTxt = 'We offer Global Music Distribution and Marketing Upload, grow and monitor your music';
const maintenanceTxt = 'This page is currently under maintenance mode.';

const HomePage = () => <ComingSoon mainTxt={maintenanceTxt} page="Home" bgClass="bg-2" />;
const AnalyticsPage = () => <ComingSoon mainTxt={maintenanceTxt} page="Analytics" bgClass="bg-2" />;
const TeamPage = () => <ComingSoon mainTxt={maintenanceTxt} page="Team" bgClass="bg-2" />;
const WalletPage = () => <ComingSoon mainTxt={maintenanceTxt} page="Wallet" bgClass="bg-2" />;
const SettingPage = () => <ComingSoon mainTxt={maintenanceTxt} page="Setting" bgClass="bg-2" />;
const MarketingPage = () => <ComingSoon introTxt={offerInfoTxt} bgClass="comingsoon__header-backdrop" />;

class DashBoardIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
	}

	toggleSideBar = () => {
		this.setState(({ sideBarShown }) => ({ sideBarShown: !sideBarShown }));
	};

	render() {
		const {
			match: { url },
			handleNotitficationDisplayState,
		} = this.props;
		const { sideBarShown } = this.state;
		return (
			<main className={(sideBarShown && 'dashboard__mobile') || 'dashboard'}>
				{/** @TODO need to tie this to react transition group */}
				{/* {(sideBarShown && (
					<div
						className={(sideBarShown && 'backdrop') || 'backdrop-out'}
						onClick={() => this.toggleSideBar()}
					/>
				)) ||
					null} */}
				<Burger toggleSideBar={this.toggleSideBar} sideBarShown={sideBarShown} />
				<section className={(sideBarShown && 'dashboard__sidebar sidebar__mobile') || 'dashboard__sidebar'}>
					<div className="ejoya-logo-box" />
					<div className="artist-box">
						<img className="artist-image" src="/inspect/Rectangle 5.png" alt="artist-profile-pic" />
						<p>Artist Name</p>
					</div>
					<NavLink to={`${url}/artist/new-release`}>
						<button className="dashboard__release heading-6 font-weight--6">
							<span className="music__icon" />
							New Release
						</button>
					</NavLink>
					<div className="dashboard__function-list">
						<NavLink
							to="/dashboard"
							className="heading-6-1 font-weight--5"
							activeClassName="font-weight--8"
						>
							<span className="home" />
							Home
						</NavLink>
						<NavLink to={`${url}/artist/fan-page`} className="heading-6-1 font-weight--5">
							<span className="fans" />
							Analytics
						</NavLink>
						<NavLink to={`${url}/artist/team-page`} className="heading-6-1 font-weight--5">
							<span className="team" />
							Team
						</NavLink>
						<NavLink to={`${url}/artist/wallet-page`} className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Wallet
						</NavLink>
						<NavLink to={`${url}/artist/settings-page`} className="heading-6-1 font-weight--5">
							<span className="setting" />
							Settings
						</NavLink>
						<NavLink to={`${url}/artist/marketing-page`} className="signout-btn heading-6-1 font-weight--5">
							<FiTarget className="signout" />
							Market
						</NavLink>
						<div
							className="signout-btn heading-6-1 font-weight--5"
							onClick={() => {
								localStorage.removeItem('AUTH_TOKEN');
								handleNotitficationDisplayState('Logout Successfully');
							}}
						>
							<FiArrowRightCircle className="signout" />
							Sign Out
						</div>
					</div>
				</section>
				<section
					className={
						(sideBarShown && 'dashboard__content  dashboard__content--mobile') || 'dashboard__content'
					}
					onClick={() => {
						if (this.state.sideBarShown) {
							this.setState({ sideBarShown: false });
						}
					}}
				>
					<Route exact path={url} component={HomePage} />
					<Route path={`${url}/artist/fan-page`} component={AnalyticsPage} />
					<Route path={`${url}/artist/new-release`} component={NewRelease} />
					<Route path={`${url}/artist/team-page`} component={TeamPage} />
					<Route path={`${url}/artist/music-monitor`} component={MarketingPage} />
					<Route path={`${url}/artist/marketing-page`} component={MarketingPage} />
					<Route path={`${url}/artist/settings-page`} component={SettingPage} />
					<Route path={`${url}/artist/wallet-page`} component={WalletPage} />
				</section>
			</main>
		);
	}
}

export default connect(
	null,
	{ handleNotitficationDisplayState }
)(DashBoardIndex);
