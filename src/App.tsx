import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { userActions } from './store/user'
import Pages from './components/pages'

interface DispatchProps {
  getMeAsyncAction(): Promise<void>
}

const App: React.FC<DispatchProps> = ({ getMeAsyncAction }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMeAsyncAction().finally(() => {
      setLoading(false)
    })
  }, [getMeAsyncAction])

  return <>{!loading && <Pages />}</>
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getMeAsyncAction: () => dispatch(userActions.getMeAsyncAction()),
})

export default connect(null, mapDispatchToProps)(App)
