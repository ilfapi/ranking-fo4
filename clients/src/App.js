import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//====== Components
import ProtectedRoute from './components/routing/ProtectedRoute'
//====== Views
import Home from './views/Home'
import Ranking from './views/Ranking'
import NotFound from './views/NotFound'

function App() {
	return (
		<>
			<Router>
				<Switch>
					<ProtectedRoute exact path='/' component={Home} />
					<ProtectedRoute exact path='/xep-hang' component={Ranking} />
					<Route path='/*' component={NotFound} />
				</Switch>
			</Router>
		</>
	)
}
export default App
