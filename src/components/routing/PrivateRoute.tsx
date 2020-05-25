import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router'
import Routes from '../../config/routes'

interface Props {
  loggedIn: boolean
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export const PrivateRoute: React.FC<Props> = ({ loggedIn, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (!loggedIn ? <Redirect to={Routes.Home} /> : <Component {...props} />)} />
)
