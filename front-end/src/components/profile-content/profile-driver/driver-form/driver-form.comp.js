import React, { Component } from 'react';
import {
    Form, Input, Button
} from 'antd';
import { connect } from "react-redux";

class DriverProfileForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        console.log(this.props);
        const { getFieldDecorator } = this.props.form;

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
                    label="Địa chỉ"
                >
                    {getFieldDecorator('address', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập địa chỉ!',
                        }],
                    })(
                        <Input placeholder="Nhập địa chỉ của bạn" style={{ width: '100%', }} />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Số cmnd"
                >
                    {getFieldDecorator('passportId', {
                        rules: [{ required: true, message: 'Vui lòng nhập số cmnd!' }],
                    })(
                        <Input placeholder="Nhập số cmnd của bạn" style={{ width: '100%', }} />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Nghề nghiệp"
                >
                    {getFieldDecorator('job', {
                        rules: [{ required: true, message: 'Vui lòng nhập nghề nghiệp của bạn' }],
                    })(
                        <Input style={{ width: '100%', }} placeholder="Nhập nghề nghiệp của bạn" />
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        {Object.keys(this.props.driverProfile).length > 0 ? "Sửa thông tin tài xế" : "Tạo thông tin tài xế"}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrapperDriverProfileFomr = Form.create({ name: 'driver-profile' })(DriverProfileForm);

const mapStateToProps = (state) => {
    return {
        driverProfile: state.auth.driverProfile
    }
}

export default connect(mapStateToProps, null)(WrapperDriverProfileFomr);