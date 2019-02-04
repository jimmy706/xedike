import React, { Component } from 'react';
import "./header.css";
import {Link} from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-xedike">
            <Link className="navbar-brand" to="/">
              <img src="./img/logo.png" width="170px" height="50px" alt="logo"/>
            </Link>
            

            <div className="navbar-btn-group">
             <Link className="nav-link" to="/trips">Danh sách chuyến đi</Link>
             <a href="/" data-toggle="modal" data-target="#modalLogin" className="nav-link">Đăng nhập</a>
             <button data-toggle="modal" data-target="#modalRegister" className="btn-xedike">Đăng ký</button>
            </div>
          </nav>
      </header>
    )
  }
}
