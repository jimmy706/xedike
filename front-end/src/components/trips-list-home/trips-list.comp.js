import React, { Component } from 'react';
import "./trip-list.css";
import TripListItem from "./trip-item/trip-item.comp";

export default class TripList extends Component {
  render() {
    return (
      <section className="trip-list-container py-5">
        <div className="container">
          <h1 className="text-center">Danh sách chuyến đi gần đây</h1>
          <ul className="trip-list my-5">
              <TripListItem/>
              <TripListItem/>
              <TripListItem/>

              <p className="text-center mt-5">
                <a href="/" className="btn-watch-more">Xem thêm</a>
              </p>
          </ul>
        </div>
      </section>
    )
  }
}
