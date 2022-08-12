import { useState } from 'react';

import Button from '@mui/material/Button';
import { TodoInput, Item } from '../../components';

const Home = () => {
	const [list, setList] = useState([]);
	const [currentEntry, setCurrentEntry] = useState('');

	const addEntry = () => {
		setList([...list, { value: currentEntry, done: false, index: list.length }]);
		setCurrentEntry('');
	};

	const onChange = e => setCurrentEntry(e.target.value);

	const toggleDone = entry =>
		setList(list.map(l => l.index === entry.index ? { ...l, done: !l.done } : l));

	return (
		<div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
			<div style={{ display: 'flex' }}>
				<TodoInput value={currentEntry} onChange={onChange} />
				<Button variant='outlined' onClick={addEntry}>Submit</Button>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', marginTop: 200 }}>
				{list.map((entry, i) => <Item onClick={toggleDone} entry={entry} key={i} />)}
			</div>
		</div>
	);
};

export default Home;
