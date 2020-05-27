import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody } from '../../atoms/Card'
import { Row, Col } from '../../atoms/Grid'
import { LoadingButton } from '../../molecules/LoadingButton'
import { userActions } from '../../../store/user'

const profilPic = require('../../../assets/images/profil_pic.svg')

interface DispatchProps {
  getLoginAsyncAction(): Promise<void>
}

const Signin: React.FC<DispatchProps> = ({ getLoginAsyncAction }) => {
  const [loading, setLoading] = useState(false)

  const handleOnConnect = async () => {
    setLoading(true)
    getLoginAsyncAction().catch(() => {
      setLoading(false)
    })
  }

  return (
    <Row justifyContent="center">
      <Col xs={12} sm={8} md={6} lg={4}>
        <Card>
          <CardHeader justifyContent="center">
            <Col>
              <Row justifyContent="center">
                <img width="50%" src={profilPic} title="Profil illustration" alt="Profile illustration" />
              </Row>
              <Row justifyContent="center">
                <h1>Welcome</h1>
              </Row>
            </Col>
          </CardHeader>
          <CardBody>
            <Row justifyContent="center">
              <LoadingButton color="primary" block onClick={handleOnConnect} loading={loading}>
                Connect
              </LoadingButton>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

const mapDispachToProps = (dispatch: ThunkDispatch) => ({
  getLoginAsyncAction: () => dispatch(userActions.getLoginAsyncAction()),
})

export default connect(null, mapDispachToProps)(Signin)
