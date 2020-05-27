import React from 'react'
import {
  Route, Redirect, RouteComponentProps, RouteProps,
} from 'react-router'
import { GuestRoutes } from '../../../config/routes'

interface Props extends RouteProps {
  loggedIn: boolean
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export const PrivateRoute: React.FC<Props> = ({ loggedIn, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (!loggedIn ? <Redirect to={GuestRoutes.Signin} /> : <Component {...props} />)} />
)
