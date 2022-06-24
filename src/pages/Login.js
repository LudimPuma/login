import React, { Component } from 'react';
import '../css/Login.css';
export default class Login extends Component {
  render() {
    return (
    <div className="body">
        <div className="log_in">
            <div className="cards">
                <div className="sheet">
                    <p className="Forgot_password">Forgot password?</p>
                    <h1 className="Login_Plagio_Control">Login Plagio Control</h1>

                    <h2 className="Plagio_Control">Plagio control</h2>
                    <h3 className="Enter_your_email_and_password_below">Enter your email and password below</h3>
                    <div className="textfield1">
                        <label >email</label>
                        <br/>
                        <input type="text" className="textarea_bg" placeholder="Email Address" />
                        <br/>
                    </div>
                    <br/>
                    <div className="textfield">
                        <label>password</label>
                        <br/>
                        <input type="password" className="textarea_bg"  placeholder="Password"/>
                        <br/>
                    </div>
                    
                    <div className="button">
                        <button className="btn_bg">
                            <label className="btn_label">Log in</label>
                        </button>
                    </div>
                    <div className="acount">
                        <label className="btn_label1" ><a href="singup.js">Sing up</a></label>
                        <p className="no_tienes">No tienes una cuenta?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    )
  }
}
