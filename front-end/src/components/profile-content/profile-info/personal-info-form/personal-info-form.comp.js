import React, { Component } from 'react';
import "./personal-info-form.css";
import {
    Form, Input, Button, DatePicker
} from 'antd';
import moment from "moment";

class RegistrationForm extends Component {
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

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { email, fullName, dateOfBirth, phone } = this.props;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
                    label="email"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập email!',
                        }],
                        initialValue: email ? email : ''
                    })(
                        <Input readOnly />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Họ và tên"
                >
                    {getFieldDecorator('fullName', {
                        rules: [{ required: true, message: 'Vui lòng nhập họ và tên!' }],
                        initialValue: fullName ? fullName : ''
                    })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Số điện thoại"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
                        initialValue: phone ? phone : ''
                    })(
                        <Input style={{ width: '100%', }} readOnly />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Ngày tháng năm sinh"
                >
                    {getFieldDecorator('dateOfBirth', {
                        rules: [{ required: true, message: 'Vui lòng nhập ngày tháng năm sinh!' },
                        { type: 'date', message: "Sai định dạng!" }
                        ],
                        initialValue: dateOfBirth ? moment(new Date(dateOfBirth), 'DD/MM/YYYY') : ''
                    })(
                        <DatePicker placeholder="Chọn ngày tháng năm sinh" style={{ width: '100%' }}
                        />
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Sửa thông tin</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'personal-info' })(RegistrationForm);

export default WrappedRegistrationForm;