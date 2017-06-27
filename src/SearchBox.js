import React, {Component} from 'react';

class SearchBox extends Component {
    render(){
        return(
            <span><form id="search-form">
                    <input id="search" type="text" name="query"/>
                </form>
            <i className="fa fa-search"></i></span>
        )
    }
}


export default SearchBox;