const Item = ({ entry, onClick }) =>
	<div
		onClick={() => onClick(entry)}
		style={{ color: entry.done ? 'grey' : 'black' }}>
		{entry.value}
	</div>;

export default Item;
