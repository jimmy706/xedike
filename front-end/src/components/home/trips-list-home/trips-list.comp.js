import React, { Component } from 'react';
import "./trip-list.css";
import TripListItem from "./trip-item/trip-item.comp";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class TripList extends Component {
  renderTripList = () => {
    const {userList, tripList} = this.props;
    return tripList.map((trip, index) => {
      const driver = userList.find(user => {
        return user._id === trip.driverId;
      })
      if(index < 5)
        return <TripListItem driver = {driver} trip= {trip} key = {index}/>
    })
  }

  render() {
    return (
      <section className="trip-list-container py-5">
        <div className="container">
          <h1 className="text-center">Danh sách chuyến đi gần đây</h1>
          <ul className="trip-list my-5">
              {this.renderTripList()}

              <p className="text-center mt-5">
                <Link to="/trips" className="btn-watch-more">Xem thêm</Link>
              </p>
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tripList: state.tripList,
    userList: state.userList
  }
}

export default connect(mapStateToProps, null)(TripList);


