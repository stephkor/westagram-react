import React from 'react';
// import ReactDOM from 'react-dom';
import './Login.scss';
import '../styles/Common.scss';
import Logo from '../images/logo_text.png';


class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            id: "",
            pw: ""
        };
    }


   handleChange = (event) => {
        this.setState({
            id: event.target.value
        });
   }

   handlePwChange = (event) => {
      //console.log(event.target.value)
       this.setState({
           pw: event.target.value
       });
   }

   goToMain = () => {
       //console.log(this.goToMain)
       if (this.state.id.length >= 5 && this.state.pw.length >= 8){
       this.props.history.push('/main')}
   }
 
   

    
    render() {
        //console.log(this.state.id)
        //console.log(this.state.pw)
        
        return (
            <div className="login_wrap">
                <main className = "login_wrapper">
                    <div className= "login_container">        
                        <section className="login_section">
                            <img className = "logo"  alt="logo_img" src={Logo} />
                            <div className = "login_input">
                                <input  onChange={(e) => this.handleChange(e)}  type="text" className="id" placeholder="전화번호, 사용자 이름 또는 이메일" />
                                <input onChange={(e) => this.handlePwChange(e)} type="password" className="pw" placeholder="비밀번호" minLength="8"/>
                            </div>  
                            <button className="login_btn" type="button" style = {{opacity : this.state.id.length >=5 && this.state.pw.length >= 8 ? "1" : "0.33"}} onClick={this.goToMain}><span>로그인</span></button>
                            <div className="divide">
                                <div className="empty"></div>
                                <span>또는</span>
                                <div className="empty"></div>
                            </div>
                            <div className="alt_login">
                                <div className="fb_wrap">
                                    <button className="fb">
                                        <span className="fb_icon"><i className="fab fa-facebook-square"></i>Facebook으로 로그인 </span>
                                    </button>
                                </div>
                                <span className="forgot_pw">비밀번호를 잊으셨나요?
                                </span>
                            </div>
                        </section> 
                    </div>
                    <section className = "sign_in">
                        <p>계정이 없으신가요?</p> 
                        <span className = "signin_link">가입하기</span>
                    </section>
                    <section className="download_app">
                        <p>앱을 다운로드 하세요</p>
                        <button className="appstore">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" alt="apple_app_store"/>
                        </button>
                        <button className="playstore">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" alt="play_store" />
                        </button>
                    </section>
                </main>
                <footer>
                    <nav className="lnb">
                        <ul>
                            <li>소개</li>
                            <li>도움말</li>
                            <li>홍보 센터</li>
                            <li>API</li>
                            <li>채용 정보</li>
                            <li>개인정보처리방침</li>
                            <li>약관</li>
                            <li>위치</li>
                            <li>인기 계정</li>
                            <li>해시태그</li>
                            <li>언어</li>
                        </ul>
                    </nav>
                    <div className = "copyrights">
                    <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                    </div>
                </footer>
            </div>
            );
        }
    }





export default Login;