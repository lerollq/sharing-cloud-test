import React, { useState } from 'react'
import { connect } from 'react-redux'
import { resourceSelectors } from '../../../store/resource'
import { Card, CardHeader, CardBody } from '../../atoms/Card'
import { Row } from '../../atoms/Grid'
import { Input } from '../../atoms/Input'
import { FormGroup } from '../../atoms/FormGroup'
import { Label } from '../../atoms/Label'
import { LoadingButton } from '../../molecules/LoadingButton'
import { bookingsActions } from '../../../store/bookings'
import { SpanFeedback } from '../../atoms/Span'
import { validators } from '../../../helpers/validators'

interface DispatchToProps {
  postBookingAsyncAction(name: string, duration: number): Promise<void>
}
type StateToProps = ReturnType<typeof resourceSelectors.selectResource>

type BookFormProps = StateToProps & DispatchToProps
const BookForm: React.FC<BookFormProps> = ({
  bookingDurationStep,
  minimumBookingDuration,
  maximumBookingDuration,

  postBookingAsyncAction,
}) => {
  const [bookDuration, setBookDuration] = useState(0)
  const [bookName, setBookName] = useState('')
  const [loading, setLoading] = useState(false)
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    postBookingAsyncAction(bookName, bookDuration).finally(() => {
      setLoading(false)
    })
  }

  return (
    <Card>
      <CardHeader>
        <h2>Book now</h2>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleOnSubmit}>
          <Row>
            <FormGroup>
              <Label>
                Duration:
                {bookDuration}
              </Label>
              <Input
                type="range"
                value={bookDuration}
                step={bookingDurationStep}
                min={minimumBookingDuration}
                max={maximumBookingDuration}
                onChange={(e) => setBookDuration(parseInt(e.target.value))}
              />
              <SpanFeedback>
                {validators.bookingDuration(
                  bookDuration,
                  minimumBookingDuration,
                  maximumBookingDuration,
                  bookingDurationStep,
                )}
              </SpanFeedback>
            </FormGroup>

            <FormGroup>
              <Label>Name:</Label>
              <Input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
              <SpanFeedback>{validators.lengthBookName(bookName)}</SpanFeedback>
            </FormGroup>

            <LoadingButton color="primary" block type="submit" loading={loading}>
              Book
            </LoadingButton>
          </Row>
        </form>
      </CardBody>
    </Card>
  )
}

const mapStateToProps = (state: AppState) => ({
  ...resourceSelectors.selectResource(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  postBookingAsyncAction: (name: string, duration: number) => dispatch(bookingsActions.postBookingAsyncAction(name, duration)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)
