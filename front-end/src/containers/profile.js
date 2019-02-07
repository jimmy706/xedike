import React, { Component } from 'react';
import HeaderComp from '../components/header/header.comp';
import FooterComp from "../components/footer/footer.comp";
import ProfileContent from "../components/profile-content/profile-content.comp";
import ModalRegister from '../components/modal-register/modal-register.comp';
import ModalLogin from "../components/modal-login//modal-login.comp";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <HeaderComp/>
        <ProfileContent/>
        <FooterComp/>
        <ModalRegister/>
        <ModalLogin/>
      </div>
    )
  }
}
