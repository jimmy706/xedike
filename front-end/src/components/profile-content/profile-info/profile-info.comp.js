import React, { Component } from 'react';
import {connect} from "react-redux";

class ProfileInfo extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(ProfileInfo);