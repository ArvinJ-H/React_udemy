import axios from 'axios';

const KEY = 'AIzaSyA-Ze0heQqj8Tsmuqp6mlyTFp2vd45aXmk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY
	}
});
