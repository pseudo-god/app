
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import utils from 'src/utils';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logoIcon from 'src/assets/logo.png';
import './index.scss';

class TopNav extends Component {
	render() {
		const { bg = 'dark', logo = logoIcon } = this.props;
		return (
			<Navbar className='top-nav-section' bg={bg} variant={bg} expand='lg'>
				<Navbar.Brand href='/'>
					<img
					 	width='139'
					 	height='31'
						src={logo}
						className='d-inline-block align-top'
						alt='logo'
					/>
				</Navbar.Brand>
				
				<Navbar.Toggle aria-controls='top-nav' />

				<Navbar.Collapse id='top-nav' className='justify-content-end'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>{intl.get('HOME')}</Nav.Link>
						<Nav.Link href='/benchmark'>{intl.get('DUE')}</Nav.Link>
						<Nav.Link href='/community'>{intl.get('COMMUNITY')}</Nav.Link>
						<Nav.Link href='/investment'>{intl.get('INVESTMENT')}</Nav.Link>
						<Nav.Link target='_blank' rel='noopener noreferrer' href='https://cryptoyc.github.io/'>{intl.get('BLOG')}</Nav.Link>
						<NavDropdown className='nav-dropdown' title={intl.get('ABOUT')} id='basic-nav-dropdown'>
							<NavDropdown.Item href='/about'>{intl.get('ABOUT_US')}</NavDropdown.Item>
							<NavDropdown.Item href='/group'>{intl.get('GROUP')}</NavDropdown.Item>
							<NavDropdown.Item href='/join'>{intl.get('JOIN_US')}</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link onClick={() => utils.handleTriggerLang('zh-CN')}>中文</Nav.Link>
						<Nav.Link onClick={() => utils.handleTriggerLang('en-US')}>EN</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default TopNav;