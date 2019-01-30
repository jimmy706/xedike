import React, { Component } from 'react';
import "./header.css";
// import {Link} from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-xedike">
            <a className="navbar-brand" href="/">
              <img src="./img/logo.png" width="170px" height="50px" alt="logo"/>
            </a>

            <div className="navbar-btn-group">
             <a href="/" data-toggle="modal" data-target="#modalLogin" className="nav-link">Đăng nhập</a>
             <button data-toggle="modal" data-target="#modalRegister" className="btn-xedike">Đăng ký</button>
            </div>
          </nav>
      </header>
    )
  }
}
