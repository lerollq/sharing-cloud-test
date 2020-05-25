import React from 'react'
import Routes from '../../config/routes'
import { Route, Redirect, RouteComponentProps } from 'react-router'

interface Props {
  loggedIn: boolean
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export const GuestRoute: React.FC<Props> = ({ loggedIn, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (loggedIn ? <Redirect to={Routes.Dashboard} /> : <Component {...props} />)} />
)
