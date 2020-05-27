import React from 'react'
import { Route } from 'react-router'
import { PublicRoutes } from '../../../config/routes'
import HomePage from './Home'

const PublicPages: React.FC = () => (
  <>
    <Route exact path={PublicRoutes.Home} component={HomePage} />
  </>
)

export default PublicPages
