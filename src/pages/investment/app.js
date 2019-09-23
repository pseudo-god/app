import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';

import topBanner from 'src/assets/About/2.png';

// const IMG_LINK = [
// 	['https://bitcoin.org', 'https://ethereum.org', ''],
// 	['https://iota.org', 'https://filecoin.io', 'http://idni.org'],
// 	['https://eos.io', 'https://z.cash', ''],
// ];

class App extends Component {
	getImg = (arr, url) => {
		return arr.map(i => i.map(sub => require(`src/assets/${url}/${sub}.png`)));
	}
	render() {
		const IMG_1 = this.getImg([
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8','9']
		], 'Investment/1');
		const IMG_1_HOVER = this.getImg([
			['1_', '2_', '3_'],
			['4_', '5_', '6_'],
			['7_', '8_','9_']
		], 'Investment/1');
		const IMG_LINK_1 = [
			['https://chaoex.com', 'https://bitrabbit.com', 'https://sfex.net'],
			['', '', 'http://candaq.com'],
			['https:// sky.io', 'http://tezas.com','http://waterdrip.io']
		];
		const IMG_2 = this.getImg([
			['1', '2', '3'], 
			['4', '5', '6'], 
			['7', '8', '9']
		], 'Index/investment');
		const IMG_2_HOVER = this.getImg([
			['1_', '2_', '3_'], 
			['4_', '5_', '6_'], 
			['7_', '8_', '9_']
		], 'Index/investment');
		const IMG_LINK_2 = [
			['https://bitcoin.org', 'https://ethereum.org', ''],
			['https://iota.org', 'https://filecoin.io', 'http://idni.org'],
			['https://eos.io', 'https://z.cash', ''],
		];
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
					<div className='img-group'>
						{IMG_1.map((arr, i) =>
							<div className='img-row' key={i}> 
								{arr.map((url, j) => 
									<div className='img-col'>
										<a href={IMG_LINK_1[i][j]} target='_blank'>
											<img
												className='img'
												src={url} 
												onMouseOver={e => e.currentTarget.src = IMG_1_HOVER[i][j]}
												onMouseOut={e => e.currentTarget.src = IMG_1[i][j]}
											/>
										</a>
									</div>
								)}
							</div>
						)}
					</div>

					<div className='title-lg' style={{marginTop: 80}}>{intl.get('INVEST_TITLE3')}</div>
					<div className='img-group'>
						{IMG_2.map((arr, i) =>
							<div className='img-row' key={i}> 
								{arr.map((url, j) => 
									<div className='img-col'>
										<a href={IMG_LINK_2[i][j]} target='_blank'>
											<img
												className='img'
												src={url} 
												onMouseOver={e => e.currentTarget.src = IMG_2_HOVER[i][j]}
												onMouseOut={e => e.currentTarget.src = IMG_2[i][j]}
											/>
										</a>
									</div>
								)}
							</div>
						)}
					</div>
					
				</div>

				<Footer />
			</div>
		);
	}
}

export default withIntl(App);