import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import NavbarMenu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'


const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				<>

					<header>
						<NavbarMenu />
					</header>
					<main>
						<Component {...rest} {...props} />
					</main>
					<Footer />
				</>
			}
		/>
	)
}

export default ProtectedRoute
