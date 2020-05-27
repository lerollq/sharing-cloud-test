import styled from 'styled-components'

/**
 *  CARD CONTAINER
 */

export default styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`

interface CardHeaderProps {
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'end' | 'start' | 'flex-end' | 'flex-start'
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}

/**
 *  CARD HEADER COMPONENT
 */

export const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  padding: 1rem 2rem;
  width: 100%;
  flex-wrap: ${({ flexWrap }) =>
      flexWrap
        ? `
           ${flexWrap};
        `
        : `
           wrap;
        `}
    ${({ alignItems }) =>
      alignItems &&
      `
        align-items: ${alignItems};
      `}
    ${({ justifyContent }) =>
      justifyContent &&
      `
        justify-content: ${justifyContent};
      `};
`

/**
 *  CARD BODY COMPONENT
 */

export const CardBody = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`
