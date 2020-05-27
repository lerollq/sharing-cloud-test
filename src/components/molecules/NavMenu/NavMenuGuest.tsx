import React from 'react'
import { MenuItem } from '../../atoms/MenuItem'
import { GuestRoutes } from '../../../config/routes'
import { Link } from '../../atoms/Link'

const NavMenuGuest: React.FC = () => (
  <>
    <MenuItem>
      <Link to={GuestRoutes.Signin}>Sign in</Link>
    </MenuItem>
  </>
)

export default NavMenuGuest
