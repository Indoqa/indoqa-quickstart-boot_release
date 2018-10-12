import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'react-fela'
import {I18nextProvider} from 'react-i18next'
import {Box, buildTheme} from 'indoqa-react-fela'
import Loadable from 'react-loadable'
import MainMenuTemplate from '../commons/components/templates/MainMenuTemplate'

import theme from './theme'
import i18n from './i18n'

const Loading = () => (
  <MainMenuTemplate title="Overview">
    <Box m={2}>Loading ...</Box>
  </MainMenuTemplate>
)

const OverviewPage = Loadable({
  loader: () => import('../overview/components/OverviewPage'),
  loading: Loading,
})

const TimePage = Loadable({
  loader: () => import('../time/components/TimePage'),
  loading: Loading,
})

export default class App extends React.Component<{}> {

  public render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Route exact path="/" component={OverviewPage}/>
            <Route exact path="/time" component={TimePage}/>
          </Switch>
        </I18nextProvider>
      </ThemeProvider>
    )
  }
}
