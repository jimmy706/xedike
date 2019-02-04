import React, { Component } from 'react';
import "./trip-item.css";
import NumberFormat from 'react-number-format';
import {Link} from "react-router-dom";

export default class TripListItem extends Component {
  render() {
    const {trip, driver} = this.props;
    return (
      
      <li className="trip-list-item">

        <div className="wrapper">
            <div className="location">
                <span className="location-from">{trip.locationFrom}</span>
                <i className="fa fa-arrow-right mx-2" ></i>
                <span className="location-to">{trip.locationTo}</span>
            </div>
            <div className="start-time">
                <i className="fa fa-calendar"></i>
                {new Date(trip.startTime).toLocaleDateString()}
            </div>
        </div>

        <div className="wrapper">
            <div className="car-name">Lamorghini 2019</div>
            <div className="number-of-seats">
                <i className="fa fa-users"></i>
                <span>{trip.availableSeats}</span>
            </div>
        </div>

        <div className="wrapper">
            <div className="driver">
                <img src="./img/user-ic.png" alt="avatar" className="avatar mr-1 rounded-circle" />
                <div>
                    <span className="driver-name">{driver.fullName}</span>
                    <p className="rates m-0"><i className="fa fa-star"></i><span>4.5</span></p>
                </div>
                
            </div>
        </div>

        <div className="wrapper">
            <h3 className="fee d-inline mr-3">
                <NumberFormat value={trip.fee} displayType={'text'} thousandSeparator={true}  />
                <sup>vnd</sup>
            </h3>
            <Link className="btn-action float-right" to ={{
                pathname: "/",
            }}>Đặt chỗ</Link>
        </div>
      </li>
    )
  }
}
