import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return(
    <div>
      <label>Mi App</label>
      <label>{this.props.user}</label>
      <img src=""></img>
    </div>
    )
  }
}

export default Header