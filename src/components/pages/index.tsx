import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PublicPages from './public'

import { GuestPages } from './guest'
import { PrivateRoute } from '../utils/routing/PrivateRoute'
import { GuestRoute } from '../utils/routing/GuestRoute'
import { userSelectors } from '../../store/user'
import { PrivateRoutes, GuestRoutes, PublicRoutes } from '../../config/routes'
import { PrivatePages } from './private'
import { Main, Header, Footer } from '../../styled'
import { Navbar } from '../organisms/Navbar'
import { Copyright } from '../atoms/Copyright'

interface StateToProps {
  loggedIn: boolean
}

const Pages: React.FC<StateToProps> = ({ loggedIn }) => (
  <React.Fragment>
    <Header>
      <Navbar />
    </Header>
    <Main>
      <PrivateRoute
        exact
        path={Object.values(PrivateRoutes).map((path) => path)}
        loggedIn={loggedIn}
        component={PrivatePages}
      />
      <GuestRoute exact path={Object.values(GuestRoutes).map((path) => path)} loggedIn={loggedIn} component={GuestPages} />
      <Route exact path={Object.values(PublicRoutes).map((path) => path)} component={PublicPages} />
    </Main>
    <Footer>
      <Copyright />
    </Footer>
  </React.Fragment>
)

const mapStateToProps = (state: AppState) => ({
  loggedIn: userSelectors.selectLoggedIn(state),
})

export default connect(mapStateToProps)(Pages)
