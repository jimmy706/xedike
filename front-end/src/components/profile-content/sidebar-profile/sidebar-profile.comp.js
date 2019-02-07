import React, { Component } from 'react';
import {connect} from "react-redux";
import "./sidebar-profile.css";

class SidebarProfile extends Component {
  render() {
    const {avatar, fullName} = this.props.user;
    return (
      <div className="sidebar-profile box-wrapper">
        <div className="user-interface text-center">
            <img 
                src={
                    avatar ? ("http://localhost:5500/" + avatar) : "./img/user-ic.png"
                }
                className="user-avatar"
            />
            <h5 className="user-name">{fullName}</h5>
        </div>

        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(SidebarProfile);