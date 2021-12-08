import React, { Component } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/contact.css';

class Team extends Component {
  constructor(props) {
      super();
      this.state = {
          name: '',
          email: '',
          message: ''
      }
  }

  changeHandler = event => {
      event.preventDefault();

      this.setState({
          [event.target.name]: event.target.value
      })
}


  render() {
    return (
        <AbsoluteWrapper>
          <div className="contactBlock">
            <div id="popUp" style={{opacity: '0'}}>Sent!</div>
            <h5 className="projectsHeader">Contact</h5>
            <div className="emptyBorder"></div>
            <h6>Have a question or want to work together?</h6>
            <form onSubmit={this.sendMessage} className="contactForm">
              <input onChange={this.changeHandler} value={this.state.name} name="name" type="text" placeholder="Name"></input>
              <input onChange={this.changeHandler} value={this.state.email} name="email" type="text" placeholder="E-mail"></input>
              <textarea onChange={this.changeHandler} value={this.state.message} name="message" type="text" placeholder="Your message" rows="4" cols="50"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </AbsoluteWrapper>
    );
  }
}

export default Team;
