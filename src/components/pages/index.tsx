import React from 'react'
import PublicPages from './public'

import { GuestPages } from './guest'
import { PrivateRoute } from '../utils/routing/PrivateRoute'
import { GuestRoute } from '../utils/routing/GuestRoute'
import { userSelectors } from '../../store/user'
import { connect } from 'react-redux'
import { PrivateRoutes, GuestRoutes, PublicRoutes } from '../../config/routes'
import { PrivatePages } from './private'
import { Route } from 'react-router-dom'
import { Header } from '../templates/header'
import { Workspace } from '../templates/workspace'
import { Footer } from '../templates/footer'

interface StateToProps {
  loggedIn: boolean
}

const Pages: React.FC<StateToProps> = ({ loggedIn }) => {
  return (
    <React.Fragment>
      <Header />
      <Workspace>
        <PrivateRoute
          exact
          path={Object.values(PrivateRoutes).map((path) => path)}
          loggedIn={loggedIn}
          component={PrivatePages}
        />
        <GuestRoute exact path={Object.values(GuestRoutes).map((path) => path)} loggedIn={loggedIn} component={GuestPages} />
        <Route exact path={Object.values(PublicRoutes).map((path) => path)} component={PublicPages} />
      </Workspace>
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = (state: AppState) => ({
  loggedIn: userSelectors.selectLoggedIn(state),
})

export default connect(mapStateToProps)(Pages)
