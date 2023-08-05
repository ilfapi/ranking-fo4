import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import LogoNew from './../logo-new.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Ranking = () => {
	
	let body = (
		<>	
			<div className='landing-home'>
				<div className='dark-overlay-home'>
					<div className='landing-inner-home'>
                        <div class="error-holder theme-padding">
                            <div class="container">
                                <div class="error-content-holder">
                                    <div class="error-content">
                                        <h1>404<span class="font-open-sans">Error</span></h1>
                                        <p>We're sorry,! but something went wrong.</p>
                                        <Link>
                                            <button className="btn-back-to-home" to="">back to homepage</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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