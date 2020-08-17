import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import View from './View';

class App extends React.Component {
  render() {
    return (
      <div className='ui container App'>
				<Router history={history}>
					<div>
						<Switch>
							<Route path='/' exact component={View} />
            </Switch>
					</div>
				</Router>
			</div>
    );
  }
}

export default App;