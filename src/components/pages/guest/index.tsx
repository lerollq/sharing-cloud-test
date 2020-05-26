import React from 'react'
import { Route } from 'react-router-dom'
import { GuestRoutes } from '../../../config/routes'
import Signin from './Signin'

export const GuestPages: React.FC = () => (
  <React.Fragment>
    <Route exact path={GuestRoutes.Signin} component={Signin} />
  </React.Fragment>
)
