import React, {Component} from 'react';
import Tweet from './Tweet';
import './TimeLine.css';
import axios from 'axios';


class TimeLine extends Component {

    constructor(){
        super();
        this.state = {
            tweets: []
        }
    }

    componentDidMount(){
        axios('http://localhost:8080/tweets/recent')
            .then(response => {
                this.setState({
                    tweets: response.data
                })
            })
    }

    render(){
        let tweets = []

        return(
              <section id="tweets-container">
                <h3>Tweets</h3>
                <ul>
                    {
                        this.state.tweets.map((tweet, idx) => {
                            return <Tweet info={tweet}/>
                        })
                    }
                </ul>
            </section>
        )
    }
}


export default TimeLine;
