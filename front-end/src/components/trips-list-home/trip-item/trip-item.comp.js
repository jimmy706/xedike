import React, { Component } from 'react';
import "./trip-item.css";

export default class TripListItem extends Component {
  render() {
    return (
      <li className="trip-list-item">

        <div className="wrapper">
            <div className="location">
                <span className="location-from">Cần Thơ</span>
                <i class="fa fa-arrow-right mx-2" ></i>
                <span className="location-to">Hồ Chí Minh</span>
            </div>
            <div className="start-time">
                <i class="fa fa-calendar"></i>
                30/1/2019
            </div>
        </div>

        <div className="wrapper">
            <div className="car-name">Lamorghini 2019</div>
            <div classNames="number-of-seats">
                <i class="fa fa-users"></i>
                <span>5</span>
            </div>
        </div>

        <div className="wrapper">
            <div className="driver">
                <img src="./img/user-ic.png" alt="avatar" className="avatar mr-1 rounded-circle" />
                <div>
                    <span className="driver-name">Dang Quoc Dung</span>
                    <p className="rates m-0"><i class="fa fa-star"></i><span>4.5</span></p>
                </div>
                
            </div>
        </div>

        <div className="wrapper">
            <h3 className="fee d-inline mr-3">12000 vnd</h3>
            <button className="btn-action">Đặt chỗ</button>
        </div>
      </li>
    )
  }
}
