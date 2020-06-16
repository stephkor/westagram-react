import React from 'react';
import '../styles/Common.scss';
import './Main.scss'
import Logo from '../images/logo_text.png';
import Profile from '../images/westa_profile.png';
import FeedImg from '../images/westa_feed.png';
import Aside from './Aside.js'
import Comment from './Comment'

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            comment: "",
            id : "wecoder",
            arr: []
        };
    }

  
     


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            comment: e.target.value
        });
   }



 








    render(){
        return (
            
            
                <div className="wrap">
                        <header>
                        <h1 className="logo">
                            <img className = "logo_img" alt="logo" src={Logo} />
                        </h1>  
                        <div className = "search_container">
                            <span className="search">
                            <input aria-label="검색" type="text" />
                            </span>
                        </div>
                        <nav className = "menu">
                            <ul>
                                <li><span><svg aria-label="home" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg></span></li>
                                <li><span><svg aria-label="DM" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></span></li>
                                <li><span><svg aria-label="explore" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clipRule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fillRule="evenodd"></path></svg></span></li>
                                <li><span><svg aria-label="activity" className="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></span></li>
                                <li className="nav_profile_pic"><span><img alt="profile_pic" src={Profile} /></span></li>
                            </ul>
                        </nav>
                    </header>

                    <main className="container">
                        <article className = "feed">
                            <div className="feed_story">
                                <ul>
                                    <li className="story_item"><span className = "profile_pic" ><img className="profile_pic" alt="vousmevoyez님의 프로필 사진" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/91171209_753167891884815_7722796435992739840_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=cEY1rAImDhsAX8QFrqq&amp;oh=fb7b018c7e6dcc11c3edfec282b32deb&amp;oe=5F060F84" /></span></li>
                                    <li className="story_item"><span className = "profile_pic" ><img className="profile_pic" alt="mensaiq180님의 프로필 사진" src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&amp;_nc_ohc=8_uE6AH0S60AX-bKTVO&amp;oh=483d00d0c86c136ba24c570d70b8235b&amp;oe=5F03DA8F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" /></span></li>
                                    <li className="story_item"><span className = "profile_pic"><img className="profile_pic" alt="eajpark님의 프로필 사진" draggable="false" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79122250_536754230252012_2031024295508967424_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UMyah-aHtrgAX8bWwHe&amp;oh=ee00caf7ab301453f4c0c59d076d6fba&amp;oe=5F06B034" /></span></li>
                                </ul>
                            </div>
                    
                            <section className="feed_content_container">
                                <div className="feed_content">
                                    <div className="profile_wrap">
                                        <div className="profile">
                                            <span className = "profile_pic" ><img alt="profile_pic" src={Profile} /></span>
                                            <span className="id">Bad_bird_sae</span>
                                        </div>
                                        <div className="more_btn">
                                            <button className="profile_more"> <img className="more" src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="option_more" /> </button>
                                        </div>
                                    </div>
                                    <div className="pic_frame">
                                        <img className="uploaded_img" src={FeedImg} alt="uploaded_pic"/>
                                    </div>
                                </div>
                                <div className="pic_option">
                                    <div className="pic_option_l">
                                        <button className="like btn"><svg aria-label="좋아요" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button>
                                        <button className="comments_btn"><svg aria-label="댓글 달기" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg></button>
                                        <button className="DM_btn"><svg aria-label="게시물 공유" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></button>
                                    </div>
                                    <div className="pic_option_r">
                                        <button className="save_btn"><svg aria-label="저장" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg></button>
                                    </div>
                                </div>
                                <div className="below_picture">
                                    <div className="likes_num">
                                        <p>좋아요 9개</p>
                                    </div>
                                    <div className="description">
                                        <p className="id">Bad_Bird</p>
                                        <p>부도덕 부도덕 하고 날았다</p>      
                                    </div>
                                    <button className="comment_all_btn">댓글 모두보기</button>
                                    
                                   <Comment input = {(e) => this.handleChange(e)} arr = {this.state.arr}/>
                                </div>    
                            </section>
                        </article>
                            <Aside />
                    </main>
                </div>



        );
    }
}

export default Main