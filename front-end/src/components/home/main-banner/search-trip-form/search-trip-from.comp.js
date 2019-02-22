import React, { Component } from 'react';
import "./search-trip-form.css";
import "antd/dist/antd.css";
import { Icon, Row, Col } from 'antd';
import ActionBox from './action-box/action-box.comp';
import { connect } from "react-redux";
import { changeSearchValue } from "../../../../actions/search-action";


class SearchTripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationFrom: undefined,
      locationTo: undefined,
      startTime: new Date(),
      availableSeats: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    const { locationTo, locationFrom, startTime, availableSeats } = nextProps.searchValue;
    if (locationFrom === "" && locationTo === "") {
      this.setState({
        startTime,
        availableSeats
      })
    }
    else {
      this.setState({
        locationFrom,
        locationTo,
        startTime,
        availableSeats
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleOnChange = (key, value) => {
    this.setState({
      [key]: value
    }, () => {
      const { locationFrom, locationTo, startTime, availableSeats } = this.state;
      this.props.onChangeSearchValue(locationFrom, locationTo, new Date(startTime), availableSeats);
    })
  }

  render() {
    const { locationFrom, locationTo, startTime, availableSeats } = this.state;
    return (
      <form className="search-trip-form pt-5" onSubmit={this.handleSubmit} >

        <Row type="flex">
          <Col md={20} xs={24}>
            <ActionBox
              locationFrom={locationFrom}
              locationTo={locationTo}
              startTime={startTime}
              availableSeats={availableSeats}
              handleOnChange={this.handleOnChange}
            />
          </Col>

          <Col md={4} xs={24}>
            <button className="btn-xedike" type="submit">
              <Icon type="search" />Tìm kiếm
            </button>
          </Col>
        </Row>

      </form>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearchValue: (locationFrom, locationTo, startTime, availableSeats) => {
      dispatch(changeSearchValue(locationFrom, locationTo, startTime, availableSeats));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTripForm);