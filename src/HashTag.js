import React, {Component} from 'react';


class HashTag extends Component {
    render(){
        return(
            <li>{this.props.info.hashtag}</li>
        )
    }
}


export default HashTag;