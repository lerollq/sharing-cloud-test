import React from 'react'
import Dashboard from './Dashboard'
import { PrivateRoutes } from '../../../config/routes'
import { Route } from 'react-router-dom'

export const PrivatePages: React.FC = () => (
  <React.Fragment>
    <Route exact path={PrivateRoutes.Dashboard} component={Dashboard} />
  </React.Fragment>
)
