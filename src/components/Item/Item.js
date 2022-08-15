const Item = ({ entry, onClick }) =>
	<div
		onClick={() => onClick(entry)}
		style={entry.done ? {
			color: 'grey',
			textDecoration: 'line-through'
		} : {
			color: 'black',
			textDecoration: 'none'
		}}
	>
		{entry.value}
	</div>;

export default Item;
