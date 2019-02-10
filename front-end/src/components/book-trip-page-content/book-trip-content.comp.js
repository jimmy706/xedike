import React, { Component } from 'react'
import TripInfoComp from './trip-info/trip-info.comp';
import BookTripFormComp from './book-trip-form/book-trip-form.comp';

export default class BookTripContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationGetIn: '',
            locationGetOff: '',
            paymentMethod: '',
            numberOfBookingSeats: 0,
            notes: ''
        }
    }
    render() {
        const { tripId } = this.props;
        console.log(tripId);
        return (
            <div className="container main">
                <div className="box-wrapper">
                    <TripInfoComp />
                    <BookTripFormComp />
                </div>

            </div>
        )
    }
}
