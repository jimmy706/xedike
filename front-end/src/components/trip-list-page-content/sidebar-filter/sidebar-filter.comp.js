import React from 'react';
import { Select, Icon, DatePicker, InputNumber } from 'antd';
import moment from "moment";
import "./sidebar-filter.css";

const Option = Select.Option;

export default function SidebarFilter() {
    return (
        <div className="sidebar-filter">
            <h5 className="mb-3">Bộ lọc: </h5>
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

            <DatePicker size="large" name="startTime" defaultValue={moment(new Date(), 'DD/MM/YYYY')} />
            
            <InputNumber min={1} max={10} defaultValue={1} size="large"
                formatter={value => `${value} chỗ`}
                name="numberOfSeats"
            />

            <button className="btn-xedike btn btn-block"><i className="fa fa-search"></i> Tìm kiếm</button>
        </div>
    )
}
