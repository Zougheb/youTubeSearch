import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCRXg2-LBBUBUzdPw1hiNCjATHRonPlZH4";



// creat a new component to produce html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('dogs');
    }


    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // updating the state with the videos(data) coming from the YTsearch
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoselect={selectedVideo => this.setState({ selectedVideo })}
                    // passing data from the parent component app 
                    to the child component as a PROP
                    videos={this.state.videos} />
            </div>
        );
    }
}


// put it to the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
