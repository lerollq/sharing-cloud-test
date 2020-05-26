import React, { useState } from 'react'
import { MenuItem } from '../../atoms/MenuItem'
import { LoadingButton } from '../../molecules/LoadingButton'
import { userActions } from '../../../store/user'
import { connect } from 'react-redux'
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
    <React.Fragment>
      <MenuItem>
        <Link to={PrivateRoutes.Dashboard}>Dashboard</Link>
      </MenuItem>
      <MenuItem>
        <LoadingButton onClick={handleOnLogout} loading={loading}>
          Logout
        </LoadingButton>
      </MenuItem>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getLogoutAsyncAction: () => dispatch(userActions.getLogoutAsyncAction()),
})

export default connect(null, mapDispatchToProps)(NavMenuPrivate)
