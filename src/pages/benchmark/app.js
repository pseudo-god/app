import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';

import topBanner from 'src/assets/Benchmark/1.png';

const INFO = [
	{
		title: 'BENCHMARK_TITLE2',
		desc: 'BENCHMARK_DESC2',
		img: require('src/assets/Benchmark/2.png')
	},
	{
		title: 'BENCHMARK_TITLE3',
		desc: 'BENCHMARK_DESC3',
		img: require('src/assets/Benchmark/3.png')
	},
	{
		title: 'BENCHMARK_TITLE4',
		desc: 'BENCHMARK_DESC4',
		img: require('src/assets/Benchmark/4.png')
	},
	{
		title: 'BENCHMARK_TITLE5',
		desc: 'BENCHMARK_DESC5',
		img: require('src/assets/Benchmark/5.png')
	}
];

const IMG_HOVER_URLS =  [
	['1', '2', '3'], 
	['4', '5', '6']
].map(i => i.map(sub => require(`src/assets/Benchmark/1/${sub}_.png`)));

const IMG_URLS = [
	['1', '2', '3'], 
	['4', '5', '6']
].map(i => i.map(sub => require(`src/assets/Benchmark/1/${sub}_.png`)));


class App extends Component {
	getGroup = (title, desc, img) => {
		return (
			<div className='group'>
				<img
					src={img}
				/>
				<div className='title'>{intl.get(title)}</div>
				<div className='desc'>{intl.get(desc)}</div>
			</div>
		)
	}

	render() {
		return (
			<div className='benchmark-section'>
				<TopNav bg='dark' />
				<div className='section-hd'>
					<div className='top-banner' style={{backgroundImage: `url(${topBanner})`, backgroundSize: 'cover'}}>
						<div>
							<div className='title-lg red'>{intl.get('BENCHMARK_TITLE1')}</div>
							<div className='desc-md white' style={{marginTop: 20}}>{intl.get('BENCHMARK_DESC1')}</div>
						</div>
					</div>
				</div>
				<div className='section-md'>
					{INFO.map(i => this.getGroup(i.title, i.desc, i.img))}
					<div className='title-lg' style={{marginBottom: 30}}>{intl.get('BENCHMARK_TITLE5')}</div>
					<div className='img-group'>
						{IMG_URLS.map((arr, i) =>
							<div className='img-row' key={i}> 
								{arr.map((url, j) => 
									<div className='img-col'>
										<a target='_blank'>
											<img
												className='img'
												src={url} 
												onMouseOver={e => e.currentTarget.src = IMG_URLS[i][j]}
												onMouseOut={e => e.currentTarget.src = IMG_HOVER_URLS[i][j]}
											/>
										</a>
									</div>
								)}
							</div>
						)}
					</div>
				</div>

				<div className='section-bd'>
					<div className='bg-gray'>
						<div className='title'>{intl.get('BENCHMARK_DESC6')}</div>
						<div className='btn'>
							<a href='/contact'>{intl.get('BENCHMARK_BTN1')}</a>
						</div>
						<div className='btn'>
							<a href='/submit'>{intl.get('BENCHMARK_BTN2')}</a>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);