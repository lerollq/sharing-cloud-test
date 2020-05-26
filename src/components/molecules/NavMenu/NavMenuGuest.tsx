import React from 'react'
import { MenuItem } from '../../atoms/MenuItem'
import { Button } from '../../atoms/Button'
import { GuestRoutes } from '../../../config/routes'
import { Link } from '../../atoms/Link'

const NavMenuGuest: React.FC = () => (
  <React.Fragment>
    <MenuItem>
      <Link to={GuestRoutes.Signin}>Sign in</Link>
    </MenuItem>
  </React.Fragment>
)

export default NavMenuGuest
