import React from 'react'
import { CardBodyProps, CardBody } from '../../atoms/Card'
import { Spinner } from '../../atoms/Spinner'
import { Row } from '../../atoms/Grid'

interface LoadingCardBodyProps extends CardBodyProps {
  loading?: boolean
}

const LoadingCardBody: React.FC<LoadingCardBodyProps> = ({ loading, children, ...cardBodyProps }) => (
  <CardBody {...cardBodyProps}>
    {!loading ? (
      children
    ) : (
      <Row justifyContent='center'>
        <Spinner />
      </Row>
    )}
  </CardBody>
)

export default LoadingCardBody
