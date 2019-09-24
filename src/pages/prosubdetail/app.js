import { Component } from 'react'
import TopNav from 'component/TopNav'
import Footer from 'component/Footer'
import withIntl from 'component/withIntl'
import axios from 'axios'

 class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        detail: {},
        content: "<div style='text-align: center; margin-top: 20px;'>暂无详情，请稍候重试！</div>"
      }
    }
    componentDidMount(){
      const id = window.location.search.split('=')[1]
      this.fetch(id)
    }

    fetch(id){
      const that = this
      axios.get(`https://cryptoyc.net/survey/report/${id}`).then(res => {
        const { code, data, message } = res.data
        if(code == 200){
          console.log('getDetail: ', data)
          that.setState({
            detail: data || {name: ''},
            content: data.content
          })
        } else {
          that.setState({
            content: "<div style='text-align: center; margin-top: 20px;'>暂无详情，请稍候重试！</div>"
          })
          console.log('error: ', message)
        }
      })
    }

    render() {
      const {t}=this.props
      const { detail, content } = this.state
      return <div className="proSubDetail">
          <TopNav bg='dark' />
          <div>
            <div className='header'>
              <div className='benchmark'>Benchmark</div>
              <div className='diaocha'>区块链技术尽职调查</div>
            </div>
            <div className='detail'>
              {/* <div className='title'>{detail.name}</div> */}
              <div className='content' dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
          </div>
          <Footer />
      </div>
    }
}
export default withIntl(App)