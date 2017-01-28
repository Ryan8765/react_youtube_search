import _ from 'lodash';
//get react and give access.  
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//npm youtube search api.
import YTSearch from 'youtube-api-search';

//gets the searchbar from the search_bar.js file.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//used for youtube video api. 
const API_KEY = "AIzaSyCBxRxeppyvPT_cGqtjDDFLmqHaO2YQSEg";



//create a new component.  this component should produce some html
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 

			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
		
	}

	videoSearch(term) {
		//set the state "videos" to al lthe videos returned from the call to youtube.
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});

		});
	}

	render() {
		const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
	
}

//take this component generated html and put it on the page.
ReactDOM.render(<App/>, document.querySelector('.container'));


