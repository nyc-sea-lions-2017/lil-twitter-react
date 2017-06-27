import React,{Component} from 'react';
import TimeLine from './TimeLine';
import TweetForm from './TweetForm';
import HashTags from './HashTags'
import SearchBox from './SearchBox';
import './TweetForm.css'
import axios from 'axios';


class App extends Component{
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
    return(
      <div>
        <header id="top-nav">
          <SearchBox/>
        </header>
        <section className="container">
          <TweetForm/>
          <HashTags/>
         </section> 
        <TimeLine tweets={this.state.tweets}/>
        
      </div>
    )
  }
}


export default App;