import React from 'react'
import CurrentBookings from '../../organisms/CurrentBookings/CurrentBookings'
import { Row, Col } from '../../atoms/Grid'
import { ResourceDetails } from '../../organisms/ResourceDetails'
import { BookForm } from '../../organisms/BookForm'

const Dashboard: React.FC = () => (
  <>
    <Row justifyContent="center">
      <Col sm={12} md={4}>
        <CurrentBookings />
      </Col>
      <Col sm={12} md={4}>
        <Row>
          <ResourceDetails />
        </Row>
        <Row>
          <BookForm />
        </Row>
      </Col>
    </Row>
  </>
)

export default Dashboard
