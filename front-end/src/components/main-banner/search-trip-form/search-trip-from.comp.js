import React, { Component } from 'react';
import "./search-trip-form.css";

export default class SearchTripForm extends Component {
  render() {
    return (
      <form className="search-trip-form pt-5">

        <div className="form-group search-form-item rounded-left">
          <i className="fa fa-map-marker icon-location-from"></i>
          <select className="form-control" name="locationFrom">
            <option>Nơi đi</option>
            <option value="Cần Thơ">Cần Thơ</option>
            <option value="Sài Gòn">Sài gòn</option>
          </select>
        </div>

        <div className="form-group search-form-item">
          <i className="fa fa-map-marker icon-location-to"></i>
            <select className="form-control" name="locationTo">
              <option>Nơi đến</option>
              <option value="Cần Thơ">Cần Thơ</option>
              <option value="Sài Gòn">Sài gòn</option>
            </select>
        </div>

        <div className="form-group search-form-item">
        <i className="fa fa-calendar"></i>
          <input type="date" className="form-control" name="startTime" defaultValue={new Date().toLocaleDateString()}/>
        </div>

        <div className="form-group search-form-item">
          <i className="fa fa-users"></i>
          <input type="number" className="form-control" name="availableSeats" min="1" max="10" defaultValue="1"/>
        </div>

        <button className="btn-xedike search-form-item rounded-right"><i className="fa fa-search mr-2"></i> Tìm kiếm</button>
      </form>
    )
  }
}
