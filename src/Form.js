import React from 'react';
import Header from './Header';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      usuario: '',
      password: ''
    }
  }
  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      email: e.target.children[1].value,
      usuario: e.target.children[0].value,
      password: e.target.children[2].value
    });
    console.log(this.state);
  }
  render () {
    return(
      <div>
        <Header user={this.state.usuario}/>
        <form action="#" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="usuario" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="Password" />
        <input type="submit" />
        </form>
        <Header email={this.state.email} usuario={this.state.usuario}/>
      </div>
    )
  }
}

export default Form