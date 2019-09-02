import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';

import utils from 'src/utils';
import topBanner from 'src/assets/Group/0.png';

class App extends Component {
	render() {
		return (
			<div className='group-section'>
				<TopNav bg='dark' />
				<div className='section-hd' className='top-banner' style={{backgroundImage: `url(${topBanner})`, backgroundSize: 'cover'}}>
					<div className='title-lg red'>{intl.get('GROUP_TITLE1')}</div>
					<div className='desc-md white' style={{marginTop: 20}}>{intl.get('GROUP_DESC1')}</div>
				</div>
				<div className='section-md'>
					<div className='team'>
						<div className='title'>{intl.get('GROUP_TITLE2')}</div>
						<div className='row img-group'>
							{utils.fetchGroupInfo(0).map(i => (
								<div className='img-item col-4'>
									<img src={i.img} />
									<div
										className='info'
										dangerouslySetInnerHTML={{
											__html: intl.get(i.info)
										}}
									/>
								</div>
							))}
						</div>
					</div>
					<div className='team' style={{ marginTop: 50 }}>
						<div className='title'>{intl.get('GROUP_TITLE3')}</div>
						<div className='row img-group'>
							{utils.fetchGroupInfo(1).map(i => (
								<div className='img-item col-4'>
									<img src={i.img} />
									<div
										className='info'
										dangerouslySetInnerHTML={{
											__html: intl.get(i.info)
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='section-bd'>

				</div>
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);