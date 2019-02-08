import React, { Component } from 'react'

import {
    Form, Input, Button,
} from 'antd';




class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
        };
    }

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

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }


    render() {
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
                    label="Mật khẩu cũ"
                >
                    {getFieldDecorator('old-password', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập mật khẩu cũ!',
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Mật khẩu mới"
                >
                    {getFieldDecorator('new-password', {
                        rules: [{
                            required: true, message: 'Vui lòng nhập mật khẩu mới!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Xác nhận mật khẩu mới"
                >
                    {getFieldDecorator('confirm-new-password', {
                        rules: [{
                            required: true, message: 'Yêu cầu xác nhận mật khẩu mới!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Đổi mật khẩu</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrapperChangePasswordForm = Form.create({ name: 'change-password-form' })(PasswordChangeForm);

export default WrapperChangePasswordForm;
