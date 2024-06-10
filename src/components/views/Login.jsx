import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.jpg'
import '../../App.css'

import first from '../../assets/1-service.png'
import second from '../../assets/2-service.png'
import third from '../../assets/3-service.png'
import four from '../../assets/4-service.png'
import five from '../../assets/5-service.png'
import six from '../../assets/6-service.png'
import playstor from '../../assets/playstore.png'
import { FaFacebook, FaLinkedin, FaQuestionCircle, FaTwitter, FaYoutube } from 'react-icons/fa';
import ReactCaptcha from 'modern-react-captcha';

function Login() {

  const [showDivLogin, setShowDivLogin] = useState(true);
  const [showDivOTP, setShowDivOTP] = useState(false);
  const [showDivSMSPIN, setShowDivSMSPIN] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowDivLogin(false);
    setShowDivSMSPIN(true);
  };

  const handleSuccess = () => alert('Captcha matched!');
  const handleFailure = () => alert('Captcha does not match');

  const handleBackClick = () => {
    setShowDivLogin(true);
    setShowDivSMSPIN(false);
  };
  return (

    <div className="flex md:flex-row flex-col h-screen">
    <div
      id="leftside"
      className={`flex flex-col items-center justify-center md:w-3/6 w-full max-h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${bg})`, padding: '6px' }}
    >
      <div id="home" className="text-center animate__animated animate__fadeInUp">
        <img src={logo} alt="Logo" className="w-40 h-20 mb-6 mx-auto transition-transform duration-500 hover:scale-110" />
        <div className="text-center text-white">
          <h2 className="text-3xl pb-5 font-light">Your One Stop Shop for Online Payments</h2>
          <div className="mt-2">
            <p className="text-lg">
              <span className="text-sm block">CUSTOMER SUPPORT</span>
              <br />
              <i className="fa fa-globe"></i>&nbsp;&nbsp;www.payeassy.com
              <br />
              <i className="fa fa-phone"></i>&nbsp;&nbsp;9021690216 | &nbsp;
              <i className="fa fa-envelope"></i>&nbsp;&nbsp;sales@payeassy.com
            </p>
            <hr className="my-4 border-white" />
            <span className="text-sm block mb-2">Follow Us on:</span>
            <ul className="flex justify-center text-3xl space-x-4 mb-4">
              <li className="transition-transform duration-500 hover:scale-110">
                <FaFacebook />
              </li>
              <li className="transition-transform duration-500 hover:scale-110">
                <FaTwitter />
              </li>
              <li className="transition-transform duration-500 hover:scale-110">
                <FaYoutube />
              </li>
              <li className="transition-transform duration-500 hover:scale-110">
                <FaLinkedin />
              </li>
            </ul>
            <span className="text-sm">© Pay Eassy ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </div>

      <div id="rightside" className="pt-6 flex-1 md:overflow-y-auto overflow-visible">
        <div className="about flex flex-col m-12 text-lg">
          <h2 className="mb-5">Sign In</h2>
          <a
            id="button"
            href="/"
            className="btn btn-danger text-base text-[#5cb85c] border-[#5cb85c] hover:text-white hover:bg-[#5cb85c] rounded-sm border-2 m-auto btn-outline-success py-1 px-3 ml-24 -mt-12"
          >
            Home
          </a>
          <h4 id="lblIPInfo" className="mb-5 mt-5">
            Your Current IP Address: 103.249.233.74, Ver: 1.2
          </h4>

          {showDivLogin && (
            <div id="divLogin" className="row mb-8 mt-3 flex md:flex-row flex-col justify-center">
              <div className="col-md-4 mb-4">
                <div className="mui-textfield mui-textfield--float-label">
                  <div className="group relative ">
                    <span id="lblOTPError" className="label label-danger"></span>
                    <input
                      name="DefaultTopLogin$txtLoginID"
                      maxLength="15"
                      id="txtLoginID"
                      className="form-control outline-none mr-3  focus:border-red-500 focus:outline-none border-b-2 border-gray-300 focus:placeholder-transparent"
                      type="text"
                      required
                    />
                    <span className="bar"></span>
                    <label htmlFor='txtLoginID' className="absolute top-4 left-0 transition-all duration-300 origin-0 transform -translate-y-full text-gray-500">Mobile</label>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-4">
                <div className="mui-textfield mui-textfield--float-label">
                  <div className="group relative">
                    <input
                      name="DefaultTopLogin$txtPassword"
                      id="txtPassword"
                      className="form-control outline-none mr-3 focus:border-red-500 focus:outline-none border-b-2 border-gray-300 focus:placeholder-transparent"
                      type="password"
                      required
                    />
                    <span className="bar"></span>
                    <label htmlFor='txtPassword' className="absolute top-4 left-0 transition-all duration-300 origin-0 transform -translate-y-full text-gray-500">Password</label>
                  </div>
                </div>
                <span data-class="help" data-for="password"></span>
                <button
                  className="btn  btn-link pull-right font-x-small padding-0 mt-5 text-black text-base"
                  type="button"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  name="DefaultTopLogin$cmdLogin"
                  value="Sign In"
                  id="cmdLogin"
                  className="btn btn-danger border-[1px] border-[#e99d9b] text-[#e99d9b] hover:text-white hover:bg-[#e99d9b] rounded-sm py-1 px-2 btn-outline-danger mt-3.5 cursor-pointer"
                />
              </div>
            </div>
          )}

          {showDivOTP && (
            <div id="divOTP" className="row mb-8">
              <div className="col-sm-12 mb-8">
                <span
                  id="lblOTPMsg"
                  className="label label-danger text-xs"
                ></span>
              </div>
              <div className="col-md-4 mb-4">
                <div className="mui-textfield mui-textfield--float-label">
                  <div className="group">
                    <input
                      name="DefaultTopLogin$txtOTP"
                      type="text"
                      maxLength="10"
                      id="txtOTP"
                      className="form-control outline-none focus:border-red-500 focus:outline-none border-b-2 border-gray-300 focus:placeholder-transparent"
                      required
                    />
                    <span className="bar"></span>
                    <label htmlFor='txtOTP' className="absolute top-4 left-0 transition-all duration-300 origin-0 transform -translate-y-full text-gray-500">Enter OTP</label>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  name="DefaultTopLogin$cmdOTPLogin"
                  value="Sign In"
                  id="cmdOTPLogin"
                  className="btn btn-danger btn-outline-danger mt-3.5"
                />
              </div>
            </div>
          )}

          {showDivSMSPIN && (
            <div id="divSMSPIN" className="row mb-8 flex">
              <div className="col-sm-12 mb-8">
                <span id="lblFPMsg" className="label label-danger text-xs mb-8"></span>

              </div>
              <div className="col-md-4 mb-4 mt-5">
                <div className="mui-textfield mui-textfield--float-label">
                  <div className="group relative">
                    <input
                      name="DefaultTopLogin$txtfpMobileNo"
                      type="text"
                      maxLength="10"
                      id="txtfpMobileNo"
                      className="form-control mr-3 outline-none focus:border-red-500 focus:outline-none border-b-2 border-gray-300 focus:placeholder-transparent"
                      required
                    />
                    <span className="bar"></span>
                    <label htmlFor='txtfpMobileNo' className="absolute top-4 left-0 transition-all duration-300 origin-0 transform -translate-y-full text-gray-500">Mobile Number</label>
                  </div>
                </div>
                <div className="mui-textfield mui-textfield--float-label mt-8">
                  <div className="group">
                    <div
                      style={{
                        backgroundColor: 'white',
                        height: '50px',
                        width: '180px',
                      }}
                    >
                        <ReactCaptcha
                          charset='ulns'
                          length={6}
                          color='black'
                          bgColor='#ced5d6'
                          reload={true}
                          reloadText='Reload Captcha'
                          handleSuccess={handleSuccess}
                          handleFailure={handleFailure} />
                    </div>
                    <div className='modern-react-captcha__reloadBtn'></div>
                    <span className="bar"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="mui-textfield mui-textfield--float-label">
                  <div className="group relative">
                    <input
                      name="DefaultTopLogin$txtfpSMSPwd"
                      type="password"
                      maxLength="4"
                      id="txtfpSMSPwd"
                      className="form-control mr-3 outline-none focus:border-red-500 focus:outline-none border-b-2 border-gray-300 transition-all duration-300 focus:placeholder-transparent"
                      required
                    />
                    <span className="bar"></span>
                    <label htmlFor='txtfpSMSPwd' className="absolute top-4 left-0 transition-all duration-300 origin-0 transform -translate-y-full text-gray-500">SMS Password</label>
                  </div>
                </div>

                <span data-class="help" data-for="confPass"></span>
                <button
                  className="btn btn-link pull-right font-x-small padding-0 mt-[-17px] text-black text-base"
                  type="button"
                  id="resetForm"
                  onClick={handleBackClick}
                >
                  <span>
                    <i className="ti-arrow-left"></i>
                  </span>
                  Back
                </button>
              </div>
              <div className=" items-center mr-2">
                <FaQuestionCircle />

              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  name="DefaultTopLogin$cmdForgotPass"
                  value="Submit"
                  id="cmdForgotPass"
                  className="hover:bg-[#d9534f] border-[1px] border-[#d9534f] hover:text-white px-2 py-1 text-[#d9534f] rounded-sm"
                  formNoValidate
                />
              </div>
            </div>

          )}

          <h4 className="row font-bold mb-14 mt-3">
            Pay for all the options Under a single account instantly.
          </h4>
          <div className="service grid grid-cols-3">
            <div className="feature bg-[#f5f5f5] pb-4 hover:bg-[#ebe7e7] hover:translate-y-[-12px] transition-all duration-300 rounded-sm text-center">
              <img src={first} alt="Utility Bill Payments" />
              <h6>Utility Bill Payments</h6>
            </div>
            <div className="feature bg-[#f5f5f5] pb-4 hover:bg-[#ebe7e7] hover:translate-y-[-12px] transition-all duration-300 rounded-sm text-center">
              <img src={second} alt="Mobile Top Up" />
              <h6>Mobile Top Up</h6>
            </div>
            <div className="feature bg-[#f5f5f5] pb-4 hover:bg-[#ebe7e7] hover:translate-y-[-12px] transition-all duration-300 rounded-sm text-center">
              <img src={third} alt="Money Transfer" />
              <h6>Money Transfer</h6>
            </div>
            <div className="feature bg-[#f5f5f5] pb-4 hover:bg-[#ebe7e7] hover:translate-y-[-12px] transition-all duration-300 rounded-sm text-center">
              <img src={four} alt="Mobile Bills" />
              <h6>Mobile Bills</h6>
            </div>
            <div className="feature bg-[#f5f5f5] pb-4 hover:bg-[#ebe7e7] hover:translate-y-[-12px] transition-all duration-300 rounded-sm text-center">
              <img src={five} alt="DTH Top Up" />
              <h6>DTH Top Up</h6>
            </div>
            <div className="feature bg-[#f5f5f5] pb-4 hover:bg-[#ebe7e7] hover:translate-y-[-12px] transition-all duration-300 rounded-sm text-center">
              <img src={six} alt="Data Cards Top Up" />
              <h6>Data Cards Top Up</h6>
            </div>
          </div>
        </div>
        <div 
      className="about min-h-[600px] ml-10 bg-no-repeat bg-right-bottom bg-cover pb-5"
      style={{
        backgroundImage: 'url(Images/Front/IPhone6_silver_frontface.html)',
        backgroundSize: '41%',
      }}
    >
      <h2 className="mb-4 text-4xl">Simple. Secure.</h2>
      <h1 className="mb-5 text-5xl">Digital Payments</h1>
      <br />
      <br />
      <span>
        <h3 className="mb-5 text-3xl">Download app here</h3>
        <a target="_blank" rel="noopener noreferrer" href="http://payeassy.co.in/front/Payeassy.apk">
          <img src={playstor} alt="Download on playstore" />
        </a>
      </span>
    </div>
    <footer className="bg-gray-900 text-white text-center py-5">
    <h6 className="footerText">© Pay Eassy ALL RIGHTS RESERVED.</h6>
    <div className="drag">
      <i className="up ion-arrow-up-c"></i>
    </div>
  </footer>
      </div>
      
    </div>
  )
}

export default Login
