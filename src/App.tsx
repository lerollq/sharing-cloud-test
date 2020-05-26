import React, { useState, useEffect } from 'react'
import { userActions } from './store/user'
import { connect } from 'react-redux'
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

  return <React.Fragment>{loading ? 'loading' : <Pages />}</React.Fragment>
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  getMeAsyncAction: () => dispatch(userActions.getMeAsyncAction()),
})

export default connect(null, mapDispatchToProps)(App)
