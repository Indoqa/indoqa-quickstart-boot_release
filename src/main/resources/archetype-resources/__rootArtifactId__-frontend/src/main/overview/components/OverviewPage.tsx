import * as React from 'react'
import {createComponent} from 'react-fela'
import {Link} from 'react-router-dom'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'

import './OverviewPage.css'

const Headline1 = createComponent(({theme}) => ({
  fontSize: theme.fontSizes.extraBig,
  fontWeight: 'bold',
  marginTop: 0,
  marginBottom: theme.spacing.space1,
}), 'h1') as any

const Headline2 = createComponent(({theme}) => ({
  marginTop: theme.spacing.space3,
}), Headline1) as any

const Headline3 = createComponent(({theme}) => ({
  fontSize: theme.fontSizes.big,
  fontWeight: 'bold',
  marginTop: theme.spacing.space2,
  marginBottom: theme.spacing.space1,
}), 'h3') as any

const Para = createComponent(({theme}) => ({
  lineHeight: '125%',
  marginBottom: theme.spacing.space1,
}), 'p') as any

const List = createComponent(({theme}) => ({
  listStyleType: 'disc',
  listStylePosition: 'outside',
  paddingLeft: theme.spacing.space3,
}), 'ul') as any

const ListItem = createComponent(({theme}) => ({
  lineHeight: '125%',
}), 'li') as any

export default class OverviewPage extends React.Component<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Overview">
        <Headline1>Indoqa React-Redux Typescript</Headline1>
        <Para>
          Welcome to the <span className="indoqa">Indoqa React-Redux Typescript</span>. This project demonstrates how
          we at <a href="https://www.indoqa.com" target="new">Indoqa</a> setup a Typescript-based React-Redux. After
          removing the the samples it can also serve as a starter for new projects.
        </Para>
        <List>
          <ListItem>
            Use of <a href="" target="new">indoqa-react-app</a> to create the React root app (component).
          </ListItem>
          <ListItem>
            Creation of the typed root reducer and the root epic with injected external services for testability.
          </ListItem>
          <ListItem>
            Types for actions, reducers, epics and react components. See also the global action and
            state types.
          </ListItem>
          <ListItem>
            Typed <a href="http://fela.js.org/" target="new">Fela</a> application theme,
            which is based on a base theme provided
            by <a href="https://github.com/Indoqa/indoqa-react-fela" target="new">indoqa-react-fela</a>.
          </ListItem>
          <ListItem>
            Using themed base components Box, Text and Flex provided
            by <a href="https://github.com/Indoqa/indoqa-react-fela" target="new">indoqa-react-fela</a>.
          </ListItem>
          <ListItem>
            Use of <a href="http://fela.js.org/" target="new">Fela</a> to provide typed styles
            accessing the application theme.
          </ListItem>
          <ListItem>
            Usage of <a href="https://github.com/reduxjs/reselect" target="new">Reselect</a> to access the global state.
          </ListItem>
          <ListItem>
            Providing common React components based on the atomic design methodology (atoms,
            molecules, organisms and templates) by Brad Frost.
          </ListItem>
          <ListItem>
            Setup of <a href="https://github.com/i18next/react-i18next" target="new">i18next</a> to
            make the i18n translation catalogues (namespaces) available to all React components.
          </ListItem>
          <ListItem>
            Configuration of <a href="https://github.com/Indoqa/indoqa-webpack" target="new">indoqa-webpack</a>
          </ListItem>
          <ListItem>
            Setup of&nbsp;
            <a href="https://reacttraining.com/react-router/web/guides/philosophy" target="new">
              React-Router
            </a>
            &nbsp;with&nbsp;
            <a href="https://github.com/jamiebuilds/react-loadable" target="new">react-loadable</a>
            &nbsp; demonstrating route-based code splitting.
          </ListItem>
          <ListItem>
            Hot-reload of React components, epics, actions and reducers.
          </ListItem>
        </List>

        <Headline2>Samples</Headline2>
        <Para>
          Each of the following samples focuses on particular technologies:
        </Para>
        <Headline3>
          <Link to="/">Overview</Link>
        </Headline3>
        <List>
          <ListItem>
            Import of a CSS resource
          </ListItem>
        </List>
        <Headline3>
          <Link to="/time">Time</Link>
        </Headline3>
        <List>
          <ListItem>
            Use of <a href="https://github.com/mweststrate/immer" target="new">Immer.js</a> for immutable state
            updates in reducers
          </ListItem>
          <ListItem>
            Typing of actions using the Redux action type and constants
          </ListItem>
          <ListItem>
            i18n using <a href="https://github.com/i18next/react-i18next" target="new">i18next</a> by
            passing the withNamespace function to a react component for translations.
          </ListItem>
          <ListItem>
            Producing side effects with redux-observable which call an RESTful webservice,
            covering the success and the error case and retry three times if the initial
            call was not successful.
          </ListItem>
        </List>

        <Headline2>Further readings</Headline2>
        <Headline3>Typescript</Headline3>
        <List>
          <ListItem>
            <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html" target="new>">
              Typescript handbook
            </a>
            &nbsp;by Microsoft
          </ListItem>
        </List>
        <Headline3>Typescript with React, Redux and redux-observables</Headline3>
        <List>
          <ListItem>
            <a href="https://github.com/sw-yx/react-typescript-cheatsheet" target="new>">
              React-Typescript Cheatsheet
            </a>
            &nbsp;by Shawn Wang
          </ListItem>
          <ListItem>
            <a href="https://github.com/piotrwitek/react-redux-typescript-guide" target="new>">
              React-Redux Typescript guide by
            </a>
            &nbsp;Piotrek Witek
          </ListItem>
          <ListItem>
            <a href="https://github.com/piotrwitek/typesafe-actions" target="new>">
              Typesafe actions and the "Mighty tutorial"
            </a>
            &nbsp;by Piotrek Witek
          </ListItem>
        </List>
      </MainMenuTemplate>
    )
  }
}
