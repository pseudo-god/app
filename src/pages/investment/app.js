import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';

import topBanner from 'src/assets/About/2.png';

class App extends Component {
	render() {
		return (
			<div className='investment-section'>
				<TopNav bg='dark' />
				<div className='section-hd'>
					<div className='top-banner' style={{backgroundImage: `url(${topBanner})`, backgroundSize: 'cover'}}>
						<div>
							<div className='title-lg red'>{intl.get('INVEST_TITLE1')}</div>
							<div className='desc-md white' style={{marginTop: 20}}>{intl.get('INVEST_DESC1')}</div>
						</div>
					</div>
				</div>

				<div className='section-md bg-grey'>
					<div className='mb-2'>{intl.get('INVEST_DESC2')}</div>
					<div>{intl.get('INVEST_DESC3')}</div>
				</div>

				<div className='section-bd'>
					<div className='title-lg'>{intl.get('INVEST_TITLE2')}</div>

					<div className='title-lg'>{intl.get('INVEST_TITLE3')}</div>
					
				</div>

				<Footer />
			</div>
		);
	}
}

export default withIntl(App);