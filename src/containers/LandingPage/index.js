import React, { Component, createContext } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import UploadSection from './section-upload';
import SocialsAndPaymentSection from './section-socials&payment';
import NewsLetter from './newsletter';
import Footer from './Footer';
import { handleNotitficationDisplayState } from '../../actions/notificationActions';

export const LandingPageContext = createContext();

class LandingPage extends Component {
	render() {
		return (
			<LandingPageContext.Provider value={{ ...this.props }}>
				<main className="landing-layout">
					<Header />
					<UploadSection />
					<SocialsAndPaymentSection />
					<NewsLetter />
					<Footer />
				</main>
			</LandingPageContext.Provider>
		);
	}
}

export default connect(
	null,
	{ handleNotitficationDisplayState }
)(LandingPage);
