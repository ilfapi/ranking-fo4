import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import LogoNew from './../logo-new.png'

const Ranking = () => {
	
	let body = (
		<>	
			<div className='landing-home'>
				<div className='dark-overlay-home'>
					<div className='landing-inner-home'>
						<h1>Xếp hạng</h1>
					</div>
				</div>
			</div>
		</>
	)

	return (
		<>	
			{body}
		</>
	)
}

export default Ranking