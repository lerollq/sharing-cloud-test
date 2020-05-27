import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MenuItem } from '../../atoms/MenuItem'
import { Link } from '../../atoms/Link'
import { PrivateRoutes } from '../../../config/routes'
import { Button } from '../../../styled'
import { api } from '../../../api'
import { ActionTypeKeys } from '../../../store/user/types'
import { notif } from '../../../helpers/toast'

const NavMenuPrivate: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleOnLogout = () => {
    // Set loading to true , this will display the loading spinner
    setLoading(true)
    api
      .getLogout()
      .then((response) => {
        setLoading(false)
        // Remove bearer token from local storage
        localStorage.removeItem('token')
        // Then remove user's information in user reducer
        return dispatch({
          type: ActionTypeKeys.USER_DELETE,
        })
      })
      .catch((err) => {
        setLoading(false)
      })
  }
  return (
    <React.Fragment>
      <MenuItem>
        <Link to={PrivateRoutes.Dashboard}>Dashboard</Link>
      </MenuItem>
      <MenuItem>
        <Button onClick={handleOnLogout} loading={+loading} color='primary'>
          Logout
        </Button>
      </MenuItem>
    </React.Fragment>
  )
}

export default NavMenuPrivate
