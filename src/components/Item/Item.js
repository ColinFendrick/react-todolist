const Item = ({ entry, onClick }) =>
	<div
		onClick={onClick}
		style={entry.completed ? {
			color: 'grey',
			textDecoration: 'line-through'
		} : {
			color: 'black',
			textDecoration: 'none'
		}}
	>
		{entry.title}
	</div>;

export default Item;
