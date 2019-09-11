import React, { Component } from 'react';
import TopNav from 'component/TopNav';
import Footer from 'component/Footer';
import withIntl from 'component/withIntl';
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import axios from 'axios';

class App extends Component {
  state = {
    dataSource: [],
    pageNo: 1,
    pageSize: 0,
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({
      pageSize: this.state.pageSize + COUNT,
    }, () => {
      axios.get(`https://cryptoyc.net/survey/report`, {
        params: {
          pageNo: this.state.pageNo,
          pageSize: this.state.pageSize
        }
      }).then(res => {
        this.setState({
          dataSource: res.data.data.list || []
        });
      })  
    });
  }

  handleNavigate(id){
    location.href = location.origin + `/proSubDetail?id=${id}`
  }

	render() {
    const { t } = this.props;
    const { dataSource } = this.state;
		return (
			<div className='submit'>
				<TopNav bg='dark' />
        <div className="head">
          <div className="content">
            <div className="title">Benchmark</div>
            <div className="text">区块链技术尽职调查</div>
          </div>
        </div>

        <div className="search">
          <InputGroup size="lg">
            <InputGroup.Prepend />
            <FormControl placeholder="Search" />
          </InputGroup>
        </div>

        <div className="submit-table text-center">
          <Table triped hover>
            <thead>
              <th>尽调对象</th>
              <th>评级结果</th>
              <th>项目风险</th>
            </thead>
            <tbody>
              {dataSource.map(item => (
                <tr onClick={this.handleNavigate.bind(this, item.id)}>
                  <td>{item.name}</td>
                  <td>{item.rating}</td>
                  <td>{item.risk}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            className="px-4 py-1"
            style={{ background: "#8C8B8C", border: "none" }}
            size="sm"
            onClick={this.fetch}
          >
            点击加载更多
          </Button>
        </div>
				<Footer />
			</div>
		);
	}
}

export default withIntl(App);