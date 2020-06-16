import React from 'react'
import './Main.scss'
import Profile from '../images/westa_profile.png';

class Aside extends React.Component {


    
    render(){
        return (
        <aside>
        <div className="profile">
            <span className = "profile_pic"><img alt="profile_pic" src={Profile} /></span>
            <div className="user">
                <p className="id">Bad_bird_sae</p>
                <span className="username">Bad Bird</span>
            </div>
        </div>
        <div className="recommendation">
            <div className="recom_list">
                <span>회원님을 위한 추천</span>
                <button className = "see_all" type="button" >모두보기</button>
            </div>
                <ul className="rec_">
                    <li className="rec_profile">
                        <div className="rec_profile_user"> 
                            <img alt="psj201145님의 프로필 사진" className="_6q-tv" draggable="false" src="https://instagram.fmaa5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmaa5-1.fna.fbcdn.net&amp;_nc_ohc=8_uE6AH0S60AX-9KI5w&amp;oh=14e8616d8ff8cff10dea77782f432c82&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                            <div className="user">
                                <p className="id">whatever</p>
                                <span className="followed_by">Instagram 신규 가입</span>
                            </div>
                        </div> 
                        <button className="follow">팔로우</button>
                    </li>
                    <li className="rec_profile">
                        <div className="rec_profile_user"> 
                            <img alt="psj201145님의 프로필 사진" className="_6q-tv" draggable="false" src="https://instagram.fmaa5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmaa5-1.fna.fbcdn.net&amp;_nc_ohc=8_uE6AH0S60AX-9KI5w&amp;oh=14e8616d8ff8cff10dea77782f432c82&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                            <div className="user">
                                <p className="id">whatever</p>
                                <span className="followed_by">Instagram 신규 가입</span>
                            </div>
                        </div> 
                        <button className="follow">팔로우</button>
                    </li>
                    <li className="rec_profile">
                        <div className="rec_profile_user"> 
                            <img alt="psj201145님의 프로필 사진" className="_6q-tv" draggable="false" src="https://instagram.fmaa5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmaa5-1.fna.fbcdn.net&amp;_nc_ohc=8_uE6AH0S60AX-9KI5w&amp;oh=14e8616d8ff8cff10dea77782f432c82&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                            <div className="user">
                                <p className="id">whatever</p>
                                <span className="followed_by">Instagram 신규 가입</span>
                            </div>
                        </div> 
                        <button className="follow">팔로우</button>
                    </li>
                    <li className="rec_profile">
                        <div className="rec_profile_user"> 
                            <img alt="psj201145님의 프로필 사진" className="_6q-tv" draggable="false" src="https://instagram.fmaa5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmaa5-1.fna.fbcdn.net&amp;_nc_ohc=8_uE6AH0S60AX-9KI5w&amp;oh=14e8616d8ff8cff10dea77782f432c82&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                            <div className="user">
                                <p className="id">whatever</p>
                                <span className="followed_by">Instagram 신규 가입</span>
                            </div>
                        </div> 
                        <button className="follow">팔로우</button>
                    </li>
                    <li className="rec_profile">
                        <div className="rec_profile_user"> 
                            <img alt="psj201145님의 프로필 사진" className="_6q-tv" draggable="false" src="https://instagram.fmaa5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmaa5-1.fna.fbcdn.net&amp;_nc_ohc=8_uE6AH0S60AX-9KI5w&amp;oh=14e8616d8ff8cff10dea77782f432c82&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                            <div className="user">
                                <p className="id">whatever</p>
                                <span className="followed_by">Instagram 신규 가입</span>
                            </div>
                        </div> 
                        <button className="follow">팔로우</button>
                    </li>
                </ul>
            </div> 
        </aside>


        )
    }
}



export default Aside;
