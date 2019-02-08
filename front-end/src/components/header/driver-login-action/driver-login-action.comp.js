import React, { Component } from 'react';
import "./driver-login-action.css";
import { Menu, Dropdown } from 'antd';
import { connect } from "react-redux";
import { actLogout } from "../../../actions/user-action";
import { actRemoveDriverProfile } from "../../../actions/driver-action";
import { Link } from "react-router-dom";
import { Icon } from "antd";


class DriverLoginAction extends Component {
    handleLogout = () => {
        this.props.actLogout();
        this.props.actRemoveDriverProfile();
    }
    render() {
        const { avatar } = this.props.user;

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/profile">Thông tin cá nhân</Link>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Lịch sử hành trình</a>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.handleLogout}>Đăng xuất</span>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="mr-5" style={{ display: "flex" }}>
                <button className="btn-action mr-3"><Icon type="plus" /> Tạo chuyến đi</button>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <img src={avatar ? ("http://localhost:5500/" + avatar) : "./img/user-ic.png"}
                        alt="user avatar" className="user-avatar img-fluid" />
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

export default connect(mapStateToProps, { actLogout, actRemoveDriverProfile })(DriverLoginAction);