import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import { TodoInput, Item, Counter } from '../../components';

const Home = () => {
	const [list, setList] = useState([]);
	const [currentEntry, setCurrentEntry] = useState('');

	const addEntry = () => {
		setList([...list, { title: currentEntry, completed: false, id: list.length, userId: '' }]);
		setCurrentEntry('');
	};

	// useEffect(() => {
	// 	(async() => {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	// 		const entries = await res.json();
	// 		setList(entries.slice(0, 5));
	// 	})();
	// }, []);

	// useEffect(() => {
	// 	document.title = `${list.reduce((pv, cv) => !cv.completed ? pv + 1 : pv, 0)}`;
	// }, []);

	// const deleteEntry = entry => () =>
	// 	setList(list.filter(item => item.id !== entry.id));

	const onChange = e => setCurrentEntry(e.target.value);

	// const toggleCompleted = entry => () =>
	// 	setList(list.map(l => l.id === entry.id ? { ...l, completed: !l.completed } : l));

	return (
		<div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', padding: 20 }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<TodoInput value={currentEntry} onChange={onChange} />
				<Button variant='outlined' onClick={addEntry}>Submit</Button>
				{/* <Counter count={list.reduce((pv, cv) => !cv.completed ? pv + 1 : pv, 0)} /> */}
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', marginTop: 200 }}>
				{/* {list.map((entry, i) => <Item onClick={toggleCompleted(entry)} onDelete={deleteEntry(entry)} entry={entry} key={i} />)} */}
			</div>
		</div>
	);
};

export default Home;
