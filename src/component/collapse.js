import React from 'react';
import Collapsible from 'react-collapsible';

const titleStyle = {
  borderBottom: '1px solid rgb(0, 0, 0)',
  padding: '15px 2px',
  fontSize: 20,
};

const arrowStyle = {
  color: '#DA7176',
  fontWeight: 'bold',
  fontSize: 24,
  float: 'right',
}

class Collapse extends React.Component {
  state = {
    isClose: true
  }

  onClose = () => {
    this.setState({
      isClose: true
    })
  }

  onOpen = () => {
    this.setState({
      isClose: false
    })
  }

  render() {
    const { title = '', content = '' } = this.props;
    const { isClose } = this.state;
    const trigger = (title) => 
      <div style={titleStyle}>
        {title}
        <span style={arrowStyle}>{isClose ? '>' : <span>&or;</span>}</span>
      </div>
      
    return (
      <Collapsible
        onClose={this.onClose}
        onOpen={this.onOpen}
        trigger={trigger(title)}
      >
        <div>{content}</div>
      </Collapsible>
    )
  }
}

export default Collapse;