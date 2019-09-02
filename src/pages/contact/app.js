import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import intl from 'react-intl-universal';
import axios from 'axios';

import topBanner from 'src/assets/Contact/1.png';

class App extends Component {
	render() {
		return (
			<div className='contact-section'>
				<TopNav bg='dark' />
				<div className='section-hd' className='top-banner' style={{backgroundImage: `url(${topBanner})`, backgroundSize: 'cover'}}>
					<div className='title-lg red'>{intl.get('CONTACT_TITLE')}</div>
				</div>

				<div className='section-md'>
					<Form>
						<Form.Group controlId='name'>
							<Form.Control type='text' placeholder={intl.get('CONTACT_PH1')} />
						</Form.Group>
						<Form.Group controlId='email'>
							<Form.Control type='text' placeholder={intl.get('CONTACT_PH2')} />
						</Form.Group>
						<Form.Group controlId='content'>
							<Form.Control as='textarea' rows='10' placeholder={intl.get('CONTACT_PH4')} />
						</Form.Group>
						<Button  variant='secondary' type='submit' className='btn'>
							{intl.get('CONTACT_BTN')}
  					</Button>
					</Form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);