import React, { Component } from 'react';
import "./modal-register.css";

export default class ModalRegister extends Component {
  render() {
    return (
        <div className="modal fade" id="modalRegister" tabIndex="-1" role="dialog" aria-labelledby="modal register" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">x</button>
                <h3 className="modal-title text-center">Đăng ký tài khoản Xe đi ké</h3>
                <p className="text-center">Bạn đã có tài khoản? <a href="/" data-toggle="modal" data-target="#modalLogin">Đăng nhập</a></p>
                <br/>
                <form className="modal__form-register">
                    <div className="form-group">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input id="email" name="email" className="form-control" placeholder="Nhập địa chỉ email của bạn"/>
                    </div>                    
                    <div className="form-group">
                        <label htmlFor="fullName">
                            Họ và tên:
                        </label>
                        <input id="fullName" name="fullName" className="form-control" placeholder="Nhập họ tên của bạn"/>
                    </div> 
                    <div className="form-group inline-group pr-1">
                        <label htmlFor="password">
                            Mật khẩu:
                        </label>
                        <input id="password" name="password" className="form-control" type="password" placeholder="Nhập mật khẩu"/>
                    </div>
                    <div className="form-group inline-group pl-1">
                        <label htmlFor="password2">
                            Mật khẩu xác thực:
                        </label>
                        <input id="password2" name="password2" className="form-control" type="password" placeholder="Nhập mật khẩu xác thực"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            Số điện thoại
                        </label>
                        <input id="phone" name="phone" className="form-control" placeholder="Nhập số điện thoại của bạn" autoCorrect="false"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">
                            Ngày sinh
                        </label>
                        <input id="dateOfBirth" name="dateOfBirth" className="form-control" type="date" placeholder="Nhập ngày sinh của bạn"/>
                    </div>
                    <div className="form-group">
                        <label>Bạn muốn trở thành !?</label>
                        <input type="radio" name="userType" id="passenger" value="passenger" className="d-none"/>
                        <input type="radio" name="userType" id="driver" value="driver" className="d-none"/>
                        <br/>
                        <div className="inline-wrapper pr-2">
                            <label htmlFor="passenger" className="label-choice float-left" id="labelPassenger">                                
                                <img src="./img/img_signup_passenger.png" alt="signup passenger" className="img-fluid"/>  
                                <p className="text-center mt-5">Hành khách</p>
                            </label>
                        </div>
                        <div className="inline-wrapper pl-2">
                            <label htmlFor="driver" className="label-choice float-right" id="labelDriver">     
                                <img src="./img/img_signup_driver.png" alt="signup driver" className="img-fluid"/>   
                                <p className="text-center mt-5">Tài xế</p>                        
                            </label>
                        </div>                        
                    </div>

                    <p className="text-center">Khi đăng ký tài khoản, mặc định bạn đã đồng ý với các <a href="/">Điều khoản</a> và <a href="/">Điều kiện</a> hoạt động của chúng tôi.</p>

                    <button className="btn btn-block btn-xedike">Đăng kí</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
