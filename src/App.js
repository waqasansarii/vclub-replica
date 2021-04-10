import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Routes from "./Route/Routes"
import { validateFunc } from './state/reducer'
import './App.css';

function App() {

  let dispatch = useDispatch()
  const selector = useSelector((state) => {
    return state.userReducers
  })

  useEffect(() => {
    
    if (selector.user) {
      setTimeout(() => {
        dispatch(validateFunc(true))
      }, 300000)
    }
  })

  return (

    <React.Fragment>
      <div >
        <Routes
          validate={selector.validate}
        />
      </div>
    </React.Fragment>

  );
}

export default App;
