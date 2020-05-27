import React from 'react'
import { CardBody, Grid } from '../../../styled'
import { Spinner } from '../../atoms/Spinner'

interface LoadingCardBodyProps {
  loading?: boolean
}

const LoadingCardBody: React.FC<LoadingCardBodyProps> = ({ loading, children, ...cardBodyProps }) => (
  <CardBody {...cardBodyProps}>
    {!loading ? (
      children
    ) : (
      <Grid.Row justifyContent='center'>
        <Spinner />
      </Grid.Row>
    )}
  </CardBody>
)

export default LoadingCardBody
