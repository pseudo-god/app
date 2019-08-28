import React from 'react';
import utils from 'src/utils'
import intl from 'react-intl-universal';

import './index.scss';
import logo from 'src/assets/Footer/logo.png';
import wechatIcon from 'src/assets/Footer/wechat.png';
import weiboIcon from 'src/assets/Footer/weibo.png';
import twitterIcon from 'src/assets/Footer/twitter.png';
import facebookIcon from 'src/assets/Footer/facebook.png';
import telegramIcon from 'src/assets/Footer/telegram.png';
import githubIcon from 'src/assets/Footer/github.png';
import mediumIcon from 'src/assets/Footer/medium.png';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer-section text-light'>
        <img
          alt='logo'
          width='139'
          height='31'
          className='d-block'
          src={logo}
        />
        <p className='desc'>Redefine Tomorrow</p>

        <ul className='footer-list'>
          <li><a href='/#'>{intl.get('PRIVACY_POLICY')}</a></li>
          <li><a href='/#'>FAQ</a></li>
        </ul>

        <ul className='footer-list'>
          <p className='big-title'>{intl.get('CONTENTS')}</p>
          <li><a href='/benchmark'>{intl.get('BENCHMARK')}</a></li>
          <li><a href='/investment'>{intl.get('INVESTMENT')}</a></li>
          <li><a target='_blank' rel='noopener noreferrer' href='https://cryptoyc.github.io/'>{intl.get('BLOG')}</a></li>
        </ul>

        <ul className='footer-list'>
          <p className='big-title'>{intl.get('ABOUT')}</p>
          <li><a href='/#'>EVOLAB</a></li>
          <li><a href='/group'>{intl.get('GROUP')}</a></li>
          <li><a href='/join'>{intl.get('JOIN_US')}</a></li>
        </ul>

        <p className='big-title'>{intl.get('FOLLOW_US')}</p>
        <div className='img-group'>
          <img src={wechatIcon} />
          <a target='_blank' rel='noopener noreferrer' href='https://www.weibo.com/CryptoYC'><img src={weiboIcon} /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/CryptoYC'><img src={twitterIcon} /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/CryptoYC'><img src={facebookIcon} /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://t.me/CryptoYC'><img src={telegramIcon} /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/CryptoYC'><img src={githubIcon} /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@CryptoYC'><img src={mediumIcon} /></a>
        </div>
        <hr className='hr' />

        <div className='section-bm clearfix'>
          <div className='float-left'>
            <span onClick={() => utils.handleTriggerLang('zh-CN')}>中文</span> 
            <span onClick={() => utils.handleTriggerLang('en-US')}>{' '}EN</span>
          </div>
          <div className='float-right'>@2019 CryptoYC.ALL Rights Reserved</div>
        </div>
      </div>
    );
  }
}

export default Footer;