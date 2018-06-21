import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD5q7UqK250CVkGwYTGReDdnM9_UHkrUD4'; 
//
//const API_KEY = 'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE' codeschool

//Create new component

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }
    render() {
        return (
        <div>
            <SearchBar /> 
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}

//Take this component and place on HTML's DOM
ReactDOM.render(<App />, document.querySelector('.container'));