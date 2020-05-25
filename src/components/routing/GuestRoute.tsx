import React from 'react'
import { PrivateRoutes } from '../../config/routes'
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router'

interface Props extends RouteProps {
  loggedIn: boolean
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export const GuestRoute: React.FC<Props> = ({ loggedIn, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (loggedIn ? <Redirect to={PrivateRoutes.Dashboard} /> : <Component {...props} />)} />
)
