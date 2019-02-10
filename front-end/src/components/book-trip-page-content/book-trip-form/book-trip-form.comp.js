import React, { Component } from 'react'
import {
    Form, Input, Select, Button, InputNumber,
} from 'antd';
import places from "../../../constants/places-data";

const { Option } = Select;
const { TextArea } = Input;




class BookTripForm extends Component {
    state = {
        confirmDirty: false,
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    renderOptions = () => {
        return places.sort((a, b) => a.value.localeCompare(b.value)).map(place => {
            return <Option value={place.value}>{place.label}</Option>
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>

                <Form.Item
                    {...formItemLayout}
                    label="Nơi đi"
                >
                    {getFieldDecorator('locationGetIn', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập nơi đi!',
                        }],
                    })(
                        <Select style={{ width: '100%' }} size="large" placeholder="Chọn nơi đi">
                            {this.renderOptions()}
                        </Select>
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Nơi đến"
                >
                    {getFieldDecorator('locationGetOff', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập nơi đến!',
                        }],
                    })(
                        <Select style={{ width: '100%' }} size="large" placeholder="Chọn nơi đến">
                            {this.renderOptions()}
                        </Select>
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Hình thức thanh toán"
                >
                    {getFieldDecorator('paymentMethod', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập hình thức thanh toán!',
                        }],
                        initialValue: "cash"
                    })(
                        <Select style={{ width: '100%' }} size="large">
                            <Option value="cash">Tiền mặt</Option>
                            <Option value="card">Thẻ</Option>
                        </Select>
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Số ghế"
                >
                    {getFieldDecorator('numberOfBookingSeats', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập số ghế!',
                        }],
                        initialValue: 1
                    })(
                        <InputNumber min={1} max={5} style={{ width: '100%' }} size="large" placeholder="Chọn số ghế cần đặt" />
                    )}
                </Form.Item>



                <Form.Item
                    {...formItemLayout}
                    label="Ghi chú"
                >
                    {getFieldDecorator('notes', {
                    })(
                        <TextArea rows={6} placeholder="Nội dung ghi chú" style={{ width: '100%' }} />
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">Đặt chỗ</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrapperBookTripForm = Form.create({ name: 'register' })(BookTripForm);


export default WrapperBookTripForm;