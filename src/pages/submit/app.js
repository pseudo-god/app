import React, { Component } from "react";
import TopNav from "component/TopNav";
import Footer from "component/Footer";
import withIntl from "component/withIntl";
import axios from "axios";
import { Table, Button } from 'react-bootstrap';
import { REPORT } from "src/url";

const COUNT = 10;

class App extends Component {
  state = {
    dataSource: [],
    pageNo: 1,
    pageSize: 0
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState(
      {
        pageSize: this.state.pageSize + COUNT
      },
      () => {
        axios
          .get(REPORT, {
            params: {
              pageNo: this.state.pageNo,
              pageSize: this.state.pageSize
            }
          })
          .then(res => {
            this.setState({
              dataSource: res.data.data.list ||[]
            });
          });
      }
    );
  };

  render() {
    const { dataSource } = this.state;

    return (
      <div className="submit-section">
        <TopNav bg="dark" />
        <div className="section-hd">
          <div className="submit-table text-center">
            <Table triped hover>
              <thead>
                <th>尽调对象</th>
                <th>评级结果</th>
                <th>项目风险</th>
              </thead>
              <tbody>
                {dataSource.map((item, idx) => (
                  <tr onClick={() => {
                    window.location.href=`/prosubdetail?id=${idx+1}`
                  }}>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default withIntl(App);
