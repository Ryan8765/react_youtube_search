//has no need for state - doesn't record any user intereaction and doesn't re-render.


import React from 'react';

import VideoListItem from './video_list_item';

const VideoList =  ( props ) => {

	//returnsn an array of video list items.  The "key" attribute provides a way for React to re-render in the future.  Because this is an array of videos, react needs to know which array item has potentially been updated - so you find a way to add a unique identifier to each item.  In this case we use the etag on the youtube video (which is a unique identifier)
	const videoItems = props.videos.map( (video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video}/>

		);
	});

	//below {videoItems} - react will automatically know this is an array and render each video_list_item created above in the props.videos.map.
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);

};


export default VideoList;