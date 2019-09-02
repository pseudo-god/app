import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';
import dueIcon from 'src/assets/Index/2.png';

const IMG_HOVER_URLS =  [
	['1', '2', '3'], 
	['4', '5', '6'], 
	['7', '8', '9']
].map(i => i.map(sub => require(`src/assets/Index/investment/${sub}_.png`)));

const IMG_URLS = [
	['1', '2', '3'], 
	['4', '5', '6'], 
	['7', '8', '9']
].map(i => i.map(sub => require(`src/assets/Index/investment/${sub}_.png`)));

const IMG_LINK = [
	['https://bitcoin.org', 'https://ethereum.org', ''],
	['https://iota.org', 'https://filecoin.io', 'http://idni.org'],
	['https://eos.io', 'https://z.cash', ''],
];


class App extends Component {
	render() {
		return (
			<div className='index-section'>
				<TopNav bg='dark' />
				
				<div className='section-hd'>
					<div className='slogan'>{intl.get('INDEX_TITLE1')}</div>
					<div className='slogan'>{intl.get('INDEX_TITLE2')}</div>
					<div className='slogan red'>{intl.get('INDEX_TITLE3')}</div>
					<div className='desc-wrapper'>
						<div className='desc'>{intl.get('INDEX_DESC1')}</div>
						<div className='desc'>{intl.get('INDEX_DESC2')}</div>
					</div>
				</div>

				<div className='section-md'>
					<div className='due bg-grey'>
						<img src={dueIcon} className='img'/>
						<div className='title-lg'>{intl.get('INDEX_TITLE4')}</div>
						<div className='desc-lg' style={{marginTop: 20, marginBottom: 35}}>{intl.get('INDEX_DESC3')}</div>
						<a className='btn-red' href='/benchmark'>{intl.get('INDEX_BTN1')}</a>
					</div>

					<div className='investment'>
						<a className='btn-red' href='investment'>{intl.get('INDEX_BTN2')}</a>
						<div className='title-lg' style={{marginTop: 40, marginBottom: 20}}>{intl.get('INDEX_TITLE5')}</div>
						<div className='img-group'>
							{IMG_URLS.map((arr, i) =>
								<div className='img-row' key={i}> 
									{arr.map((url, j) => 
										<div className='img-col'>
											<a href={IMG_LINK[i][j]} target='_blank'>
												<img
													className='img'
													src={url} 
													onMouseOver={e => e.currentTarget.src = IMG_HOVER_URLS[i][j]}
													onMouseOut={e => e.currentTarget.src = IMG_URLS[i][j]}
												/>
											</a>
										</div>
									)}
								</div>
							)}
						</div>
					</div>
					
				</div>

				<div className='section-bd  bg-grey'>
					<div className='title-lg'>{intl.get('INDEX_TITLE6')}</div>
					<div className='desc-lg' style={{margin: '20px 0'}}>{intl.get('INDEX_DESC4')}</div>
					<a className='btn-red' href='/contact'>{intl.get('INDEX_BTN3')}</a>
				</div>
				
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);