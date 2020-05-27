import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../../store/user'
import { Button, Card, CardHeader, CardBody, Grid } from '../../../styled'
import { notif } from '../../../helpers/toast'

const profilPic = require('../../../assets/images/profil_pic.svg')

interface DispatchProps {
  getLoginAsyncAction(): Promise<void>
}

const Signin: React.FC<DispatchProps> = ({ getLoginAsyncAction }) => {
  const [loading, setLoading] = useState(false)

  const handleOnConnect = async () => {
    setLoading(true)
    getLoginAsyncAction().catch((err) => {
      setLoading(false)
      notif.error(err.message)
    })
  }

  return (
    <Grid.Row justifyContent='center'>
      <Grid.Col xs={12} sm={8} md={6} lg={4}>
        <Card>
          <CardHeader justifyContent='center'>
            <Grid.Col>
              <Grid.Row justifyContent='center'>
                <img width='50%' src={profilPic} title='Profil illustration' alt='Profile illustration' />
              </Grid.Row>
              <Grid.Row justifyContent='center'>
                <h1>Welcome</h1>
              </Grid.Row>
            </Grid.Col>
          </CardHeader>
          <CardBody>
            <Grid.Row justifyContent='center'>
              <Button color='primary' block onClick={handleOnConnect} loading={+loading} disabled={loading}>
                Connect
              </Button>
            </Grid.Row>
          </CardBody>
        </Card>
      </Grid.Col>
    </Grid.Row>
  )
}

const mapDispachToProps = (dispatch: ThunkDispatch) => ({
  getLoginAsyncAction: () => dispatch(userActions.getLoginAsyncAction()),
})

export default connect(null, mapDispachToProps)(Signin)
