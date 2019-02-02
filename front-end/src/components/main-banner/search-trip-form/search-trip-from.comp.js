import React, { Component } from 'react';
import "./search-trip-form.css";
import "antd/dist/antd.css";
import { Icon, Row, Col } from 'antd';
import ActionBox from './action-box/action-box.comp';


export default class SearchTripForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this);
  }

  render() {
    return (
      <form className="search-trip-form pt-5" onSubmit = {this.handleSubmit}>

        <Row type="flex">
          <Col span={20} >
              <ActionBox/>
          </Col>

          <Col span={4} >
            <button className="btn-xedike rounded-right" type="submit">
              <Icon type="search" />Tìm kiếm
            </button>
          </Col>
        </Row>

      </form>
    )
  }
}
