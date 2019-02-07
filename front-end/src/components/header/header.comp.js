import React, { Component } from 'react';
import "./header.css";
import {Link} from "react-router-dom";
import ActionBox from "./action-group/action-group.comp";
import {connect} from "react-redux";
import UserLoginAction from "./user-login-action/user-login-action.comp";
import DriverLoginAction from "./driver-login-action/driver-login-action.comp";

class header extends Component {
  constructor(props){
    super(props);
    this.state = {
      userType: this.props.user ? this.props.user.userType : ''
    }
  }

  renderActionGroup = () => {
    if(!localStorage.jwtToken){
      return <ActionBox/>
    }
    else if(this.state.userType === "passenger"){
      return <UserLoginAction/>
    }
    else if(this.state.userType === "driver"){
      return <DriverLoginAction/>
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      userType: nextProps.user ? nextProps.user.userType : ''
    })
  }

  render() {
    return (
      <header>
          <nav className="navbar navbar-xedike">
            <Link className="navbar-brand" to="/">
              <img src="./img/logo.png" width="170px" height="50px" alt="logo"/>
            </Link>
            

            <div className="navbar-btn-group">
            <Link className="nav-link" to="/trips">Danh sách chuyến đi</Link> 
            {this.renderActionGroup()}
                        
            </div>
          </nav>
      </header>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default  connect(mapStateToProps, null)(header);
