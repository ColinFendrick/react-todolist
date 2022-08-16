import { Switch, Route } from 'react-router-dom';

import { Home } from './components';

const App = () => (
	<div>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/somewhere' component={() => <div>somewhere</div>} />
		</Switch>
	</div>
);

export default App;
