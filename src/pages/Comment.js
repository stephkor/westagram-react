
import React from 'react'
import './Main.scss'
import '../styles/Common.scss'



class Comment extends React.Component {

    constructor() {
        super();
        this.state = {
            input: "",
            arr: []
        }
    }


    handleNewComment = (event) => {
        
        this.setState({
            input: event.target.value
            
        })   
    }

 

    submitNewComment = () => {
        arr.map(this.state.input)
    }





    render() {
        
        return (
            <>
                <div className="comment">
                        <div className = "comment_content">
                        <span className="id">Bad_Bird</span>
                        <p className="comment_p">부도덕... 부도덕...</p>
                        <span className="id">{this.submitNewComment}</span>
        <p className="comment_p"></p>
                    </div>
                </div>  
                <div className = "comment_input_wrap">
                    <div className="comment_input_container" action="">
                        <input onChange={this.props.input} className="comment_input" placeholder="댓글달기..." onChange={(e) => this.handleNewComment(e)}>
                        </input>
                        <button className="comment_post_btn" type="submit" onClick={this.submitNewComment}>게시</button>
                    </div>
                </div>
            </>     
        );
    }
}

export default Comment