import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
import axios from "axios";

export default class TripItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      carInfo: '',
      passengerRates: '',
      userId: '',
      passportId: '',
      job: '',
    }
  }
  componentDidMount() {
    if (this.props.driver) {
      axios.get(`http://localhost:5500/api/user/driver/${this.props.driver._id}`)
        .then(res => {
          const { address, carInfo, passengerRates, userId, passportId, job } = res.data;
          this.setState({
            address,
            carInfo,
            passengerRates,
            userId,
            passportId,
            job
          })
        })
        .catch(err => console.log(err))
    }
  }

  calcRate = () => {
    const { passengerRates } = this.state;
    if (passengerRates.length) {
      let sum = 0;
      for (let num of passengerRates) {
        sum += num;
      }

      return (sum / passengerRates.length).toFixed(1);
    }
    else
      return 0.0;
  }

  render() {
    const { trip, driver } = this.props;


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
            {driver ? (<span>{trip.availableSeats}</span>) : (<span>Loadding...</span>)}
          </div>
        </div>

        <div className="wrapper">
          <div className="driver">
            {driver ?
              (<img src={driver.avatar ? ("http://localhost:5500/" + driver.avatar) : "./img/user-ic.png"}
                alt="avatar"
                className="avatar mr-1 rounded-circle" />)
              :
              (<span>Loading...</span>)
            }
            <div>
              {driver ? (<span className="driver-name">{driver.fullName}</span>) : (<span>Loading...</span>)}
              <p className="rates m-0"><i className="fa fa-star"></i>
                {driver ? (<span>{this.calcRate()}</span>) : (<span>Loading...</span>)}
              </p>
            </div>

          </div>
        </div>

        <div className="wrapper">
          <b className="fee d-inline mr-3">
            <NumberFormat value={trip.fee} displayType={'text'} thousandSeparator={true} />
            <sup>vnd</sup>
          </b>
          <Link className="btn-action float-right" to={"/book-trip/" + trip._id}>Đặt chỗ</Link>
        </div>
      </li>
    )
  }
}
