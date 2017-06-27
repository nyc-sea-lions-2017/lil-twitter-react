import React, {Component} from 'react';
// import './Tweet.css'


class Tweet extends Component {
    render(){
        let tweet = this.props.info
        return(
            <div>
                <li className="tweet">
                    <img className="avatar" src={tweet.avatar_url} alt=""/>
                    <div className="tweet-content">
                    <p>
                        <span className="full-name">{tweet.username}</span>
                        <span className="username">{tweet.handle}</span>
                        <span className="timestamp">- 6m</span>
                    </p>
                    <p>{tweet.content}</p>
                    </div>
                </li>

            </div>
        )
    }
}

export default Tweet;
