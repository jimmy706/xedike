import React, { Component } from 'react';
import { Select, Icon, DatePicker, InputNumber, Row, Col } from 'antd';
import "./action-box.css";
import moment from "moment";

const Option = Select.Option;

export default class ActionBox extends Component {
    render() {
        return (
            <Row type="flex">
                <Col span={6}>
                    <Select
                        className="rounded-left"
                        showSearch
                        placeholder="Nơi đi"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        name="locationFrom"
                        size="large"
                        suffixIcon={<Icon type="environment" theme="twoTone" twoToneColor="#2bc71f" />}
                    >
                        <Option value="Cần Thơ">Cần Thơ</Option>
                        <Option value="Sài Gòn">Sài Gòn</Option>
                    </Select>
                </Col>

                <Col span={6}>
                    <Select
                        showSearch
                        placeholder="Nơi đến"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        name="locationTo"
                        size="large"
                        suffixIcon={<Icon type="environment" theme="twoTone" twoToneColor="#F95F48" />}
                    >
                        <Option value="Cần Thơ">Cần Thơ</Option>
                        <Option value="Sài Gòn">Sài Gòn</Option>
                    </Select>
                </Col>

                <Col span={8}>
                    <DatePicker size="large" name="startTime" defaultValue={moment(new Date(), 'DD/MM/YYYY')}/>
                </Col>

                <Col span={4}>
                    <InputNumber min={1} max={10} defaultValue={1} size="large"
                        formatter={value => `${value} chỗ`} 
                        name="numberOfSeats"
                    />
                </Col>
            </Row>
        )
    }
}
