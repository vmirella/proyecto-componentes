import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return(
    <div>
      <label>{this.props.usuario}</label>
      <label>{this.props.email}</label>
      <img src=""></img>
    </div>
    )
  }
}

export default Header