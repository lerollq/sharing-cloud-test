import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MenuItem } from '../../atoms/MenuItem'
import { LoadingButton } from '../LoadingButton'
import { userActions } from '../../../store/user'
import { Link } from '../../atoms/Link'
import { PrivateRoutes } from '../../../config/routes'

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
        <LoadingButton onClick={handleOnLogout} loading={loading}>
          Logout
        </LoadingButton>
      </MenuItem>
    </>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getLogoutAsyncAction: () => dispatch(userActions.getLogoutAsyncAction()),
})

export default connect(null, mapDispatchToProps)(NavMenuPrivate)
