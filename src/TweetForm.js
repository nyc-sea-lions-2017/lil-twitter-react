import React, {Component} from 'react';
import axios from 'axios';



class TweetForm extends Component{
    constructor(){
        super()
        this.createTweet = this.createTweet.bind(this)
    }

    createTweet(){
        debugger
    }

    render(){
        return(
 
                <section id="tweet-box">
                    <p id="tweet-box-title">Compose New Tweet</p>
                    <form id="tweet-form" onSubmit={this.createTweet}>
                        <textarea ref="content-text" id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
                        <input type="submit" value="Tweet"/>
                    </form>
                </section>

        )
    }
}

export default TweetForm;