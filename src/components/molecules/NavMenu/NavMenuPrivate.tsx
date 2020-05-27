import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MenuItem } from '../../atoms/MenuItem'
import { userActions } from '../../../store/user'
import { Link } from '../../atoms/Link'
import { PrivateRoutes } from '../../../config/routes'
import { Button } from '../../../styled'

interface DispatchProps {
  getLogoutAsyncAction(): Promise<void>
}

export type NavMenuPrivateProps = DispatchProps

const NavMenuPrivate: React.FC<NavMenuPrivateProps> = ({ getLogoutAsyncAction }) => {
  const [loading, setLoading] = useState(false)
  const handleOnLogout = () => {
    setLoading(true)
    getLogoutAsyncAction().catch(() => setLoading(false))
  }
  return (
    <>
      <MenuItem>
        <Link to={PrivateRoutes.Dashboard}>Dashboard</Link>
      </MenuItem>
      <MenuItem>
        <Button onClick={handleOnLogout} loading={loading}>
          Logout
        </Button>
      </MenuItem>
    </>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getLogoutAsyncAction: () => dispatch(userActions.getLogoutAsyncAction()),
})

export default connect(null, mapDispatchToProps)(NavMenuPrivate)
