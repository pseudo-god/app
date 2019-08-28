import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';

class App extends Component {
	render() {
		return (
			<div className='benchmark-section'>
				<TopNav bg='dark' />
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);