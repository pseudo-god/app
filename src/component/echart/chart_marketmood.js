import React from 'react'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
import {market_moon} from 'src/request'
import intl from 'react-intl-universal';

class chartMarketMood extends React.Component {
  state = {
    option: {}
  }
  componentDidMount(){
    this.getOption();
  }
  componentWillUpdate() {
    if (this.state.option.series) {
      this.state.option.series[0].detail.formatter = `{b|${intl.get(this.state.option.status)}}`
    }

    this.echarts_react.getEchartsInstance().setOption(this.state.option);
  }
  getOption() {
    market_moon({}).then(res => {
      let value = res.data.GreedIndex
      let status = value < 25 ? "itsExtreme" : value < 50 ? "fear" : value < 75 ? "greed" : "extremenGreed"
      let bgColor = value < 25 ? '#C84048' : value < 50 ? '#A25545' : value < 75 ? '#48522D' : '#3A4328'

      let option = {
        status,
        series: [
          {
            name: intl.get("marketSentiment"),
            type: 'gauge',
            data: [
              {value: value}
            ],
            center: ["50%", window.location.pathname.indexOf("data")>=0? '50%': '60%'],
            radius: '100%',
            splitNumber: 4,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                color: [
                  [0.25, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{offset: 0, color: '#C84048'}, {offset: 1, color: '#A95043'}])],
                  [0.5, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{offset: 0, color: '#A25545'}, {offset: 1, color: '#686E42'}])],
                  [0.75, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#617144'}, {offset: 1, color: '#48522D'}])],
                  [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#43512D'}, {offset: 1, color: '#3A4328'}])]
                ],
                width: 15
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              distance: 5,
              color: '#A1A1A1',
              fontSize: 14,
              formatter: function (value) {
                return value % 50 === 0 ? value : '';
              }
            },
            splitLine: {
              length: 15
            },
            pointer: {
              length: '65%',
              width: 8
            },
            itemStyle: {
              color: '#A1A1A1'
            },
            detail: {
              formatter: [
                `{b|${intl.get(status)}}`
              ].join(''),
              rich: {
                a: {
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 15,
                  padding: [5, 10, 5, 10]
                },
                b: {
                  backgroundColor: bgColor,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#fff',
                  padding: [5, 10, 5, 10]
                }
              }
            },
            markPoint: {
              data: [
                {
                  x: '50%',
                  y: '51%',
                  symbol: 'circle',
                  itemStyle: {
                    color: '#fff',
                    borderWidth: 0.5,
                    borderColor: '#ccc'
                  },
                  symbolSize: 30,
                }
              ],
              animation: false
            }
          }
        ]
      }
      console.log(option, JSON.stringify(option))
      this.setState({
        'option': option
      })
    })

}
  render() {
    return (
      <ReactEcharts
       ref={(e) => { this.echarts_react = e; }}
        option={this.state.option}
        style={{width: '100%', height: '240px'}}
        className='chart-market-mood' />
    )
  }
}

export default chartMarketMood