import React, { Component } from "react";

import TopNav from "component/TopNav";
import Footer from "component/Footer";
import withIntl from "component/withIntl";
import intl from "react-intl-universal";
import {chainInfo} from 'src/request'
import ChartMarketMood from 'component/echart/chart_marketmood'
import ChartActive from 'component/echart/chart_active'
import topbg from 'src/assets/data/topbg.jpg';


const getRank = (data) => {
  return data.map((item, index) => {
    return (
      <div className="item" key={index} onClick={() => { window.open(item.url) }}>
        <span>{item.rank}</span>
        <span>
          <img src={item.iconUrl} />
          <span className="name">{item.name}</span>
        </span>
        <span>{item.balance}</span>
        <span>{item.addressCount}</span>
      </div>
    )
  })
}


const updataTime = (separator = '') =>{
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}


class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      list: [],
      showTipsMarket:false,
      showTipsActive:false,
      showTipsDeal:false
    };
  }
  componentDidMount(){
    chainInfo().then(res => {
      this.setState({
        list: res.data.data.entityList
      })
    })
  }
  render() {
    return (
      <div className="contact-section data-page">
        <TopNav bg="dark" />
        <div className="head">
          <img src={topbg} />
          <div className="content">
            <div className="title">{intl.get("DATA")}</div>
          </div>
        </div>

        <div className="body-container">
          <div className="charts">
            <div className="chart-item">
            <div className="title">{intl.get("marketSentiment")}<span className="tips" onClick={() => { this.setState({showTipsMarket:!this.state.showTipsMarket})   }}>?</span></div>
              {this.state.showTipsMarket ? (<div className="tips-box">
              <p>{intl.get('showTipsMarket')}</p>
              <p>{intl.get('showTipsMarket_s1')}</p>
              <p>{intl.get('showTipsMarket_s2')}</p>
              <p>{intl.get('showTipsMarket_s3')}</p>
              <p>{intl.get('showTipsMarket_s4')}</p>
              <p>{intl.get('showTipsMarket_s5')}</p>
              </div>): ""}
              <div className="chart">
                <ChartMarketMood />
              </div>
              <div className="footer">
                <span>{intl.get("Updated")}: {updataTime("-")}</span>
                <span>{intl.get("dataSources")}: alternative.me</span>
              </div>
            </div>
            <div className="chart-item">
            <div className="title">{intl.get("addressNumPrice")}<span className="tips" onClick={() => { this.setState({showTipsActive:!this.state.showTipsActive})   }}>?</span></div>
              {this.state.showTipsActive ? (<div className="tips-box active-tips-box">
              <p>{intl.get('showTipsActive')}</p>
              </div>): ""}
              <div className="chart">
                <ChartActive />
              </div>
              <div className="footer">
                <span>{intl.get("Updated")}: {updataTime("-")}</span>
                <span>{intl.get("dataSources")}: troytrade.com</span>
              </div>
            </div>
          </div>
          <div className="rank">
          <div className="title">{intl.get("cryptocurrency")}<span className="tips" onClick={() => { this.setState({showTipsDeal:!this.state.showTipsDeal})   }}>?</span></div>
            {this.state.showTipsDeal ? (<div className="tips-box rank-tips-box">
            <p>{intl.get('showTipsDeal')}</p>
              </div>): ""}
            <div className="content">
              <div className="item">
                <span>{intl.get("ranking")}</span>
                <span>{intl.get("exchange")}</span>
                <span>{intl.get("balance")}</span>
                <span>{intl.get("address")}</span>
              </div>
              {getRank(this.state.list)}
            </div>
            <div className="footer">
              <span>{intl.get("Updated")}: {updataTime("-")}</span>
              <span>{intl.get("dataSources")}: chain.info</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withIntl(App);
