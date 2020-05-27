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
    // Since we dont want to update the component in case of success logout
    // We need to keep track if component still mounted with this boolean value
    let mounted = true
    setLoading(true)
    getLogoutAsyncAction().finally(() => {
      // Then check if mounted still true
      if (mounted) {
        // If true we can set loading to false
        setLoading(false)
      }
    })
    // Set mounted to false, when component unmount
    return () => (mounted = false)
  }
  return (
    <>
      <MenuItem>
        <Link to={PrivateRoutes.Dashboard}>Dashboard</Link>
      </MenuItem>
      <MenuItem>
        <Button color='primary' onClick={handleOnLogout} loading={loading}>
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
