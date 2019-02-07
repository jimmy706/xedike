import React, { Component } from 'react';
import {connect} from "react-redux";
import axios from "axios";
import SidebarProfile from './sidebar-profile/sidebar-profile.comp';
import ProfileInfo from './profile-info/profile-info.comp';

class ProfileContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar: '',
            dateOfBirth: '',
            email: '',
            fullName: '',
            isActive: false,
            numberOfTrips: 0,
            password: '',
            phone: '',
            registerDate: '',
            userType: ''
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:5500/api/user/' + this.props.user.id
        })
        .then(res => {
            const {avatar, dateOfBirth, email, fullName, isActive, numberOfTrips, password, phone, registerDate, userType} = res.data;
            this.setState({
                avatar,
                dateOfBirth,
                email,
                fullName,
                isActive,
                numberOfTrips,
                password,
                phone,
                registerDate, 
                userType
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
  render() {
    return (
      <section className="main profile-page-main">
        <div className="container-fluid">
            <div className="col-sm-3 col-12">
                <SidebarProfile/>
            </div>
            <div className="col-sm-3 col-12">
                <ProfileInfo/>
            </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(ProfileContent);