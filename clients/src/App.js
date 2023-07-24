import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//====== Components
import ProtectedRoute from './components/routing/ProtectedRoute'
//====== Views
import Home from './views/Home'
import Ranking from './views/Ranking'

function App() {
	return (
		<>
			<Router>
				<Switch>
					<ProtectedRoute exact path='/' component={Home} />
					<ProtectedRoute exact path='/xep-hang' component={Ranking} />
					{/* <>					
					<ProtectedRoute exact path='/dashboard' component={Dashboard} />
					<ProtectedRoute exact path='/about' component={About} />
					<ProtectedRoute exact path='/config' component={Config} />
					<ProtectedRoute exact path='/userguide' component={UserGuide} />
					<ProtectedRoute exact path='/contact' component={Contact} />
					<ProtectedRoute exact path='/home' component={Home} />
					</> */}
				</Switch>
			</Router>
		</>
	)
}
export default App
