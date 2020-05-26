import React from 'react'
import { userSelectors } from '../../../store/user'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { MenuItem } from '../../atoms/MenuItem'
import { Link } from '../../atoms/Link'
import { GuestRoutes } from '../../../config/routes'
import { Button } from '../../atoms/Button'

interface StateToProps {
  loggedIn: boolean
}

interface OwnProps {
  show?: boolean
  className?: string
}

type Props = OwnProps & StateToProps

const NavMenu: React.FC<Props> = ({ loggedIn, className }) => (
  <ul className={className}>
    {loggedIn ? (
      <React.Fragment>
        <MenuItem>
          <Button color='primary' borderless>
            Logout
          </Button>
        </MenuItem>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <MenuItem>
          <Link to={GuestRoutes.Signin}>Sign in</Link>
        </MenuItem>
      </React.Fragment>
    )}
  </ul>
)

const mapStateToProps = (state: AppState) => ({
  loggedIn: userSelectors.selectLoggedIn(state),
})

const StyledNavMenu = styled(NavMenu)`
  flex-wrap: wrap;
  width: fit-content;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 768px) {
    display: none;
    margin-top: 0.5rem;
    flex-direction: column;
    width: 100%;
    ${({ show }) => show && 'display: flex;'}
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export default connect(mapStateToProps)(StyledNavMenu)
