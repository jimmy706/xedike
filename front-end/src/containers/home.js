import React, { Component } from 'react';
import HeaderComp from '../components/header/header.comp';
import FooterComp from '../components/footer/footer.comp';
import MainBannerComp from "../components/main-banner/main-banner.comp";
import TripList from '../components/trips-list-home/trips-list.comp';
import Introduction from "../components/introduction/introduction.comp";
import Introduction2 from "../components/introduction-2/introduction-2.comp";
import Introduction3 from "../components/introduction-3/introduction-3.comp";
import ModalRegister from '../components/modal-register/modal-register.comp';

export default class home extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

  render() {    
    return (
      <div>
          <HeaderComp/>
          <MainBannerComp/>
          <TripList/>
          <Introduction/>
          <Introduction2/>
          <Introduction3/>
          <FooterComp/>     
          <ModalRegister/>     
      </div>
    )
  }
}
