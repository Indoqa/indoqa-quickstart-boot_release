import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import timeReducer from '../time/store/time.reducer'

const rootReducer: any = combineReducers({
  router: routerReducer,
  time: timeReducer,
})

export default rootReducer
