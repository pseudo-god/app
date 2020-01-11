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
      showTips:false
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
              <div className="title">市场情绪指数<span className="tips" onClick={() => { this.setState({showTips:!this.state.showTips})   }}>?</span></div>
              {this.state.showTips ? (<div className="tips-box">
              <p>We are gathering data from the five following sources. Each data point is valued the same as the day before in order to visualize a meaningful progress in sentiment change of the crypto market.First of all, the current index is for bitcoin only (we offer separate indices for large alt coins soon), because a big part of it is the volatility of the coin price.</p>
              <p>But let’s list all the different factors we’re including in the current index:</p>
              <p>Volatility (25 %)</p>
              <p>Market Momentum/Volume (25%)</p>
              <p>Social Media (15%)</p>
              <p>Surveys (15%)</p>
              <p>Dominance (10%)</p>
              </div>): ""}
              <div className="chart">
                <ChartMarketMood />
              </div>
              <div className="footer">
                <span>更新时间: {updataTime("-")}</span>
                <span>数据来源: alternative.me</span>
              </div>
            </div>
            <div className="chart-item">
              <div className="title">活跃地址/价格</div>
              <div className="chart">
                <ChartActive />
              </div>
              <div className="footer">
                <span>更新时间: {updataTime("-")}</span>
                <span>数据来源: troytrade.com</span>
              </div>
            </div>
          </div>
          <div className="rank">
            <div className="title">交易所排行</div>
            <div className="content">
              <div className="item">
                <span>排行</span>
                <span>交易所</span>
                <span>链上余额(BTC)</span>
                <span>地址数</span>
              </div>
              {getRank(this.state.list)}
            </div>
            <div className="footer">
              <span>更新时间: {updataTime("-")}</span>
              <span>数据来源: chain.info</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withIntl(App);
