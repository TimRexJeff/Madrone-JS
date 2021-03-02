import React from 'react'
import { Link } from "react-router-dom"

import MadroneLogo from '../images/madrone_website_logo.png'

const Logo = () => {
	return (
		<Link to="/">
			<img src={MadroneLogo} />
		</Link>
	)
}

export default Logo