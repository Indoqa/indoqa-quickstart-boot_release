import * as React from 'react'
import {CSSProperties} from 'react'
import {StateType} from 'typesafe-actions'
import {RouterAction, LocationChangeAction} from 'react-router-redux'
import {services} from './rootEpic'
type ReactRouterAction = RouterAction | LocationChangeAction

import {TimeAction} from '../time/store/time.types'
import rootReducer from './rootReducer'
import {Theme} from './theme'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = ReactRouterAction | TimeAction
  export type Services = typeof services

  export interface CSSPropertiesWithBreakpointExtensions extends CSSProperties {
    desktop: CSSProperties,
    tablet: CSSProperties,
  }
  export interface WithTheme {
    readonly theme: Theme,
  }
  export interface WithChildren {
    readonly children?: React.ReactNode,
  }
  export interface FelaProps extends WithTheme, WithChildren {}
}
