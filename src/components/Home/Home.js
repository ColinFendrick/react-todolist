import { useState } from 'react';

import Button from '@mui/material/Button';
import { TodoInput } from '../../components';

const Home = () => {
	const [list, setList] = useState([]);
	const [currentEntry, setCurrentEntry] = useState('');

	const addEntry = () => {
		setList([...list, { value: currentEntry, done: false }]);
		setCurrentEntry('');
	};

	const onChange = e => setCurrentEntry(e.target.value);

	return (
		<div>
			<div style={{ display: 'flex' }}>
				<TodoInput value={currentEntry} onChange={onChange} />
				<Button variant='outlined' onClick={addEntry}>Submit</Button>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{list.map(({ value }, i) => <div key={`${value}-${i}`}>{value}</div>)}
			</div>
		</div>
	);
};

export default Home;
