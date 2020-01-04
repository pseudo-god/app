import React, { Component } from "react";

import TopNav from "component/TopNav";
import Footer from "component/Footer";
import withIntl from "component/withIntl";
import intl from "react-intl-universal";
import {chainInfo} from 'src/request'
import ChartMarketMood from 'component/echart/chart_marketmood'
import ChartActive from 'component/echart/chart_active'



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

class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      list: []
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
          <img src="src/assets/data/topbg.jpg" />
          <div className="content">
            <div className="title">{intl.get("DATA")}</div>
          </div>
        </div>

        <div className="body-container">
          <div className="charts">
            <div className="chart-item">
              <div className="title">市场情绪指数</div>
              <div className="chart">
                <ChartMarketMood />
              </div>
              <div className="footer">
                <span>更新时间: 2019年11月25日</span>
                <span>数据来源: alternative.me</span>
              </div>
            </div>
            <div className="chart-item">
              <div className="title">活跃地址/价格</div>
              <div className="chart">
                <ChartActive />
              </div>
              <div className="footer">
                <span>更新时间: 2019年11月25日</span>
                <span>数据来源: alternative.me</span>
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
              <span>更新时间: 2019年11月25日</span>
              <span>数据来源: alternative.me</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withIntl(App);
