import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const Spinner: React.FC<Props> = ({ className }) => <i className={`fas fa-spinner fa-spin ${className}`}></i>

export default styled(Spinner)`
  margin-right: 10px;
  margin-left: -10px;
`
