import React from 'react'
import { Route } from 'react-router'
import { PublicRoutes } from '../../../config/routes'
import HomePage from './Home'

const PublicPages: React.FC = () => {
  return (
    <React.Fragment>
      <Route exact path={PublicRoutes.Home} component={HomePage} />
    </React.Fragment>
  )
}

export default PublicPages
