import React from 'react'
import CurrentBookings from '../../organisms/CurrentBookings/CurrentBookings'
import { Grid } from '../../../styled'
import { ResourceDetails } from '../../organisms/ResourceDetails'
import { BookForm } from '../../organisms/BookForm'

const Dashboard: React.FC = () => (
  <React.Fragment>
    <Grid.Row justifyContent='center'>
      <Grid.Col sm={12} md={4}>
        <CurrentBookings />
      </Grid.Col>
      <Grid.Col sm={12} md={4}>
        <Grid.Row>
          <ResourceDetails />
        </Grid.Row>
        <Grid.Row>
          <BookForm />
        </Grid.Row>
      </Grid.Col>
    </Grid.Row>
  </React.Fragment>
)

export default Dashboard
