import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author='sam'
					timeAgo='today at 100'
					content='hahhah'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='alex'
					timeAgo='tmr at 200'
					content='wut up'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
