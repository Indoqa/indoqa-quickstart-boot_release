import {ActionsObservable, combineEpics, ofType} from 'redux-observable'
import {ajax} from 'rxjs/ajax'
import {takeUntil} from 'rxjs/operators'
import * as Types from 'Types'
import time from '../time/store/time.epics'

export const services = {
  ajax,
}

export const combinedEpics = combineEpics(
    ...time,
)

const rootEpic = (action$: ActionsObservable<Types.RootAction>, state$: Types.RootState) => {
  return combinedEpics(action$, state$, services).pipe(
    takeUntil(action$.pipe(
      ofType('END'),
    )),
  )
}

export default rootEpic
