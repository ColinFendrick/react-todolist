import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import { TodoInput, Item, Counter } from '../../components';

const Home = () => {
	const [list, setList] = useState([]);
	const [currentEntry, setCurrentEntry] = useState('');
	const [loading, setLoading] = useState(false);

	const todosLeft = list.reduce((pv, cv) => !cv.completed ? pv + 1 : pv, 0);

	useEffect(() => {
		(async() => {
			setLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/todos');
			const entries = await res.json();
			setList(entries.slice(0, 5));
			setLoading(false);
		})();
	}, []);

	useEffect(() => {
		document.title = `${todosLeft}`;
	}, [todosLeft]);

	const addEntry = () => {
		setList([...list, { title: currentEntry, completed: false, id: list.length, userId: '' }]);
	};

	const onSubmit = () => {
		addEntry();
		setCurrentEntry('');
	};

	const onChange = event => setCurrentEntry(event.target.value);

	const toggleCompleted = entry => () => {
		// const index = list.findIndex(l => l.id === entry.id);
		// if (index === -1) return;
		// const elementToUpdate = list[index];

		// elementToUpdate.completed = !elementToUpdate.completed;
		// const newList = list.splice(index, 1, elementToUpdate);
		// setList(newList);
		setList(list.map(l => l.id === entry.id ? { ...l, completed: !l.completed } : l));
	};

	return (
		loading ? <div>we are loading</div> :
			<div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', padding: 20 }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<TodoInput value={currentEntry} onChange={onChange} />
					<Button variant='outlined' onClick={onSubmit}>Submit</Button>

					<Counter>{todosLeft} left to in todo</Counter>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', marginTop: 200 }}>
					{list.map((element, i) => <Item entry={element} onClick={toggleCompleted(element)} key={i}>{element.title}</Item>)}
				</div>
			</div>
	);
};

export default Home;
