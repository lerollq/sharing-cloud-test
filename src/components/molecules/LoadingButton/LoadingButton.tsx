import React from 'react'
import { Spinner } from '../../atoms/Spinner'
import { Button, ButtonProps } from '../../atoms/Button'

interface Props extends ButtonProps {
  loading?: boolean
}

const LoadingButton: React.FC<Props> = ({
  loading, children, disabled, ...buttonProps
}) => (
  <Button {...buttonProps} disabled={loading || disabled}>
    {loading && <Spinner />}
    {children}
  </Button>
)

export default LoadingButton
