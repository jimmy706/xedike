import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import {Link} from "react-router-dom";


import "./user-login-action.css";
import {actLogout} from "../../../actions/user-action";
import {connect} from "react-redux";

class UserLoginAction extends Component {


    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/profile">Thông tin cá nhân</Link>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Lịch sử hành trình</a>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.props.actLogout}>Đăng xuất</span>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="mr-5">
                <Dropdown overlay={menu} placement="bottomCenter">
                    <img src="./img/user-ic.png" alt="user avatar" className="user-avatar img-fluid"/>
                </Dropdown>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}


export default connect(mapStateToProps, {actLogout})(UserLoginAction)
