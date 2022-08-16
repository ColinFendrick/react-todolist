import TextField from '@mui/material/TextField';

const TodoInput = ({ value, onChange }) =>
	<TextField id='outlined-basic' label='Add a todo' variant='outlined' value={value} onChange={onChange} />;

export default TodoInput;
