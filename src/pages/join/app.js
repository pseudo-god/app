import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import intl from 'react-intl-universal';
import withIntl from 'component/withIntl';

import hireIMG_1 from 'src/assets/Join/5_1.png';
import hireIMG_2 from 'src/assets/Join/5_2.png';
import flagIMG from 'src/assets/Join/6.png';
import hoverIMG from 'src/assets/Join/7.png';
import hoverIMG2 from 'src/assets/Join/8.png';
import Collapse from 'src/component/collapse';

const GROUP_INFO = [{
		title: 'JOIN_TITLE4',
		desc1: 'JOIN_DESC2_1',
		desc2: 'JOIN_DESC2_2',
		img: require('src/assets/Join/1.png'),
		flag: true
	}, {
		title: 'JOIN_TITLE5',
		desc1: 'JOIN_DESC3_1',
		desc2: 'JOIN_DESC3_2',
		img: require('src/assets/Join/2.png'),
		flag: true
	}, {
		title: 'JOIN_TITLE6',
		desc1: 'JOIN_DESC4_1',
		desc2: 'JOIN_DESC4_2',
		img: require('src/assets/Join/3.png'),
		flag: true
	}, {
		title: 'JOIN_TITLE7',
		desc1: 'JOIN_DESC5_1',
		desc2: 'JOIN_DESC5_2',
		img: require('src/assets/Join/4.png'),
		flag: false
	}
];

class App extends Component {
	render() {
		return (
			<div className='join-section'>
				<TopNav bg='dark' />
				<div className='section-hd'>
					<div className='text-center'>
						<div className='title-lg red'>{intl.get('JOIN_TITLE1')}</div>
						<div className='desc-lg'>{intl.get('JOIN_DESC1')}</div>
						<div className='btn'>{intl.get('JOIN_BTN1')}</div>
					</div>
				</div>
				<div className='section-md'>
					<div style={{fontSize: 22}}>{intl.get('JOIN_TITLE2')}</div>
					<div style={{backgroundImage: `url(${hoverIMG})`}} className='bg-btn'>{intl.get('JOIN_TITLE3')}</div>
					{GROUP_INFO.map(i => (
						<div className='group'>
							<img src={i.img} className='w-50 d-block mx-auto' />
							<div className='title red'>{intl.get(i.title)}</div>
							<div className='desc'>{intl.get(i.desc1)}</div>
							<div className='desc'>{intl.get(i.desc2)}</div>
							{i.flag && <img src={flagIMG} className='d-block mx-auto flag'/>}
						</div>
					))}
				</div>
				<div className='section-bd'>
					<div style={{backgroundImage: `url(${hoverIMG2})`}} className='bg-btn'>{intl.get('JOIN_TITLE3')}</div>
					<div style={{marginBottom: 40}} className='w-75 mx-auto'>
						<Collapse title='投资经理' content={<img style={{width: '100%'}} src={hireIMG_1} />} />
						<Collapse title='分析师' content={<img style={{width: '100%'}} src={hireIMG_2} />} />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);