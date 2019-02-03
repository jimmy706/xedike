import React, { Component } from 'react';
import "../modal-register/modal-register.css";
import "./modal-login.css";

export default class ModalLogin extends Component {
  render() {
    return (
        <div className="modal fade" id="modalLogin" tabIndex="-1" role="dialog" aria-labelledby="modal login" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">x</button>
                        <h3 className="modal-title text-center">Đăng nhập tài khoản Xe đi ké</h3>

                        <br/>
                        <form className="modal__form-register">
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input id="email" name="email" className="form-control" placeholder="Nhập địa chỉ email của bạn" />
                            </div>
                                <div className="form-group pr-1">
                                    <label htmlFor="password">
                                        Mật khẩu:
                                    </label>
                                    <input id="password" name="password" className="form-control" type="password" placeholder="Nhập mật khẩu" />
                                </div>

                                <p className="text-center">Bạn đã chưa có tài khoản? 
                                    <a href="/" data-toggle="modal" data-target="#modalRegister" data-dismiss="modal" aria-label="Close"> Đăng kí</a>
                                </p>
                                <button className="btn btn-block btn-xedike" type="submit">Đăng nhập</button>
                        </form>
                    </div>
                </div>                
            </div>
        </div>
    )
  }
}
