import React from 'react'
import welcomeImage from '../../../assets/images/welcome.svg'
import { Col } from '../../atoms/Grid'
import styled from 'styled-components'

interface StyledProps {
  className?: string
}

const HomePage: React.FC<StyledProps> = ({ className }) => {
  return (
    <div className={className}>
      <Col xs={12} sm={8} md={6}>
        <img src={welcomeImage} width='100%' height='auto' alt='Welcome' />
      </Col>
    </div>
  )
}

export default styled(HomePage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
