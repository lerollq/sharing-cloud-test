import React from 'react'
import styled from 'styled-components'
import { Col } from '../../atoms/Grid'

const welcomeImage = require('../../../assets/images/welcome.svg')

interface StyledProps {
  className?: string
}

const HomePage: React.FC<StyledProps> = ({ className }) => (
  <div className={className}>
    <Col xs={12} sm={8} md={6}>
      <img src={welcomeImage} width="100%" height="auto" alt="Welcome" />
    </Col>
  </div>
)

export default styled(HomePage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
