import React, { Component } from 'react';

class Title extends Component {
  
  constructor(props) {
    super(props);
    this.toBlog = this.toBlog.bind(this);
    this.toGithub = this.toGithub.bind(this);
  }

  toBlog() {
    window.location.href="http://dnjstjr1030.blog.me";
  }

  toGithub() {
    window.location.href="http://github.com/MKRoughDiamond";
  }

  render() {
    return (
      <div className="title-wrapper">
        <div id="title-name-wrapper">
          <div id="title-name-content">
            Wonseok Choi
          </div>
        </div>
        <label className="title-button-wrapper">
          <div className="title-button-content">
            Blog
          </div>
          <button className="title-button" onClick={this.toBlog}>
          </button>
        </label>
        <label className="title-button-wrapper">
          <div className="title-button-content">
            Github
          </div>
          <button className="title-button" onClick={this.toGithub}>
          </button>
        </label>
      </div>
    );
  }
}

export default Title;
