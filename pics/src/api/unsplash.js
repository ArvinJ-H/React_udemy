import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization:
			'Client-ID 2ce1ea9f17556d325bff9fdea1ab90786b4a0944f6605908c35b4ca6b5933a54'
	}
});
