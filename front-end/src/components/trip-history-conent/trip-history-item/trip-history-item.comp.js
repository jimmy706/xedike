import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from "react-redux";
import "./trip-history-item.css";

class TripHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: '',
            locationFrom: '',
            locationTo: '',
            availableSeats: 0,
            fee: 0,
        }
    }

    componentDidMount() {
        const { startTime, locationFrom, locationTo, availableSeats, fee } = this.props.tripInfo;
        this.setState({
            startTime,
            locationFrom,
            locationTo,
            availableSeats,
            fee
        })
    }

    render() {
        const { startTime, locationFrom, locationTo, availableSeats, fee } = this.state;
        return (
            <div className="trip-item trip-history-item">
                <div className="wrapper">
                    <div className="location">
                        <span className="location-from">{locationFrom}</span>
                        <i className="fa fa-arrow-right mx-2" ></i>
                        <span className="location-to">{locationTo}</span>
                    </div>
                    <div className="start-time">
                        <i className="fa fa-calendar"></i>
                        {new Date(startTime).toLocaleDateString()}
                    </div>
                </div>

                <div className="wrapper">
                    <div className="car-name">Lamorghini 2019</div>
                    <div className="number-of-seats">
                        <i className="fa fa-users"></i>
                        <span>{availableSeats}</span>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="driver">
                        <img src="http://localhost:3000/img/user-ic.png"
                            alt="avatar"
                            className="avatar mr-1 rounded-circle" />
                        <div>
                            <span>Dang Quoc Dung</span>
                            <p className="rates m-0"><i className="fa fa-star"></i>
                                4
                            </p>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <label>Chi phí:  </label>
                    <h5 className="fee d-inline mr-3">
                        <NumberFormat value={fee} displayType={'text'} thousandSeparator={true} />
                        <sup>vnd</sup>
                    </h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(TripHistoryItem);