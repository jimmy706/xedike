import React, { Component } from 'react';
import { connect } from "react-redux";
import { Rate } from 'antd';
import "./sidebar-profile.css";

class SidebarProfile extends Component {
    calcRate = () => {
        if (Object.keys(this.props.driverProfile).length) {
            const { passengerRates } = this.props.driverProfile;
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
    }

    render() {
        const registerTime = (this.props.registerDate) ? new Date(this.props.registerDate).toLocaleDateString() : '';

        const { avatar, fullName, userType, numberOfTrips } = this.props;
        const { driverProfile } = this.props.user;

        return (
            <div className="sidebar-profile box-wrapper">
                <div className="user-interface text-center">
                    <img
                        src={
                            avatar ? ("http://localhost:5500/" + avatar) : "./img/user-ic.png"
                        }
                        className="user-avatar"
                    />
                    <h5 className="user-name">{fullName}</h5>
                </div>
                <div className="user-active mt-5">
                    <strong>Hoạt động: </strong>
                    <p>Thành viên từ: <span>{registerTime}</span></p>

                    {
                        (userType === "driver" && Object.keys(driverProfile).length)
                            ? (
                                <div>
                                    <strong>Đánh giá:</strong>
                                    <div><Rate allowHalf defaultValue={this.calcRate()} disabled /></div>
                                </div>
                            )
                            : (
                                <div>
                                    <b>Tổng số chuyến đi: </b>
                                    <span>{numberOfTrips ? numberOfTrips : 0}</span>
                                </div>
                            )

                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        driverProfile: state.auth.driverProfile
    }
}

export default connect(mapStateToProps, null)(SidebarProfile);