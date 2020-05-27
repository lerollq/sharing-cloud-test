import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import { PrivateRoutes } from '../../../config/routes'

export const PrivatePages: React.FC = () => (
  <>
    <Route exact path={PrivateRoutes.Dashboard} component={Dashboard} />
  </>
)
