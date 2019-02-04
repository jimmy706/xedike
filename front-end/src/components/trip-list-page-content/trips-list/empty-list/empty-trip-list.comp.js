import React, { Component } from 'react'

export default class EmptyTripList extends Component {
    render() {
        return (
            <div className="text-center my-5 mx-auto">
                <img alt="trip list empty" src="./img/img_trip_empty.png" />
                <p className="mt-2">
                    <b>Hiện chưa có chuyến đi nào</b>
                </p>
            </div>
        )
    }
}
