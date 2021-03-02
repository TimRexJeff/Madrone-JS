import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './styling/Logo'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

function NavBar() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Logo />
                <Button component={Link} to={`/`} color="inherit">Home</Button>
                <Button component={Link} to={`/consulting`} color="inherit">Consulting</Button>
                <Button component={Link} to={`/services`} color="inherit">Managed Services</Button>
                <Button component={Link} to={`/about`} color="inherit">About</Button>
                <Button component={Link} to={`/contact`} color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar