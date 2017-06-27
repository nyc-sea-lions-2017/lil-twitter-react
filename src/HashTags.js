import React, {Component} from 'react';
import HashTag from './HashTag'


class HashTags extends Component {
    render(){
        let hashtags = [{hashtag: "js"},{hashtag: "ruby"}]
        return(
              <section id="trends-container">
                <h3>Trends</h3>
                <ul>
                    {
                    hashtags.map((hashtag, idx) => {
                        return <HashTag key={idx} info={hashtag}/>
                    })
            }
                </ul>
            </section>   
        )
    }
}


export default HashTags;