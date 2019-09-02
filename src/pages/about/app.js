import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';
import Cookies from 'universal-cookie';

import topBanner from 'src/assets/About/2.png';

import aboutIMG from 'src/assets/About/1.png';
import aboutEnIMG from 'src/assets/About/1_en.png';

class App extends Component {
	componentWillMount() {
		const cookie = new Cookies();
		const lang = cookie.get('lang');
		console.log(lang)
	}
	
	render() {
		const cookie = new Cookies();
		const lang = cookie.get('lang');
		
		return (
			<div className='about-section'>
				<TopNav bg='dark' />
				<div className='section-hd'>
					<div className='top-banner' style={{backgroundImage: `url(${topBanner})`, backgroundSize: 'cover'}}>
						<div>
							<div className='title-lg red'>{intl.get('ABOUT_TITLE')}</div>
							<div className='desc-md white' style={{marginTop: 20}}>{intl.get('ABOUT_DESC1')}</div>
						</div>
					</div>
				</div>

				<div className='section-md'>
					<img
						className='w-100'
						src={(lang === 'zh-CN' || !lang) ? aboutIMG : aboutEnIMG}
						style={{padding: '30px 15px'}}
					/>
				</div>

				<div className='section-bd'>
					<div className='desc-lg'>{intl.get('ABOUT_DESC2')}</div>
					<div className='btn'>
						<a href='/contact'>{intl.get('ABOUT_BTN1')}</a>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);