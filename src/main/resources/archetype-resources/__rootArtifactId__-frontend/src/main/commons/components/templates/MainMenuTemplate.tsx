import * as React from 'react'
import DocumentTitle from 'react-document-title'
import {createComponentWithProxy} from 'react-fela'
import {Link} from 'react-router-dom'
import {Flex, Box, Text} from 'indoqa-react-fela'

import i18n from '../../../app/i18n'
import Bar from '../molecules/Bar'
import Logo from '../molecules/Logo'
import Content from '../molecules/Content'
import MainMenu from '../organisms/MainMenu'

const BASE_TITLE = 'Indoqa React-Redux Typescript'

const MOBILE_ONLY = {
  desktop: {
    display: 'none',
  },
  tablet: {
    display: 'none',
  },
}

const Main = createComponentWithProxy(({theme, 'data-menu-open': menuOpen}: any): any => ({
  paddingTop: theme.layout.actionBarHeight,
  height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
  width: '100%',
  overflow: menuOpen ? 'hidden' : 'auto',
}), Flex)

const MenuIcon = createComponentWithProxy(({theme}: any): any => ({
  marginRight: theme.spacing.space2,
  ...MOBILE_ONLY,
}), Text)

const FixedBar = createComponentWithProxy(() => ({
  position: 'fixed',
  width: '100%',
}), Box)

const MobileMenu = createComponentWithProxy(({theme, 'data-show': show}: any): any => ({
  position: 'absolute',
  zIndex: 10,
  top: theme.layout.actionBarHeight,
  left: show ? 0 : theme.layout.menuWidth * -1,
  height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
  width: theme.layout.menuWidth,
  transition: 'left 0.15s',
  ...MOBILE_ONLY,
}), Box)

const TabletDesktopMenu = createComponentWithProxy(() => ({
  display: 'none',
  desktop: {
    position: 'fixed',
    display: 'block',
    height: '100%',
  },
  tablet: {
    position: 'fixed',
    display: 'block',
    height: '100%',
  },
}), Box)

const ContentOverlay = createComponentWithProxy(({'data-show': show}) => ({
  visibility: show ? 'visible' : 'hidden',
  position: 'absolute',
  backgroundColor: 'black',
  height: '100%',
  width: '100%',
  opacity: show ? 0.6 : 0,
  transition: 'opacity .15s, visibility 0s',
  ...MOBILE_ONLY,
}), Box)

const renderHeaderContent = (title?: string, header?: string) => (
  <React.Fragment>
    <Logo mr={1} data-logo-height={50}>
      <Link to="/">{BASE_TITLE}</Link>
    </Logo>
    <Box>{title}</Box>
    <Box grow={1} />
    <Box mr={3}>{header}</Box>
  </React.Fragment>
)

const changeLanguage = (lang: string) => i18n.changeLanguage(lang)

const renderLanguage = (lang: string) => {
  if (lang === i18n.language) {
    return <Text>{lang}</Text>
  }
  return (
    <a href="#" onClick={() => changeLanguage(lang)}>{lang}</a>
  )
}

const renderLanguageSwitcher = () => (
  <Box>
    {renderLanguage('en')} | {renderLanguage('de')}
  </Box>
)

interface Props {
  children?: React.ReactNode,
  header?: string,
  title?: string,
}

interface State {
  showMobileMenu: boolean,
}

export default class MainMenuTemplate extends React.Component<Props, State> {

  public static defaultProps = {
    title: '',
    header: null,
    children: null,
  }

  public state = {
    showMobileMenu: false,
  }

  public render() {
    const {title, header, children} = this.props
    const documentTitle = title === undefined ? BASE_TITLE : `${BASE_TITLE} | ${title}`
    return (
      <Flex stretch height="100%">
        <DocumentTitle title={documentTitle} />
        <MobileMenu data-show={this.state.showMobileMenu}>
          <MainMenu />
        </MobileMenu>
        <ContentOverlay data-show={this.state.showMobileMenu} onClick={() => this.toggleMenu()} />
        <Box grow={1}>
          <FixedBar>
            <Bar pl={2} pr={2}>
              <MenuIcon onClick={() => this.toggleMenu()}>[Menu]</MenuIcon>
              {renderHeaderContent(title, header)}
              {renderLanguageSwitcher()}
            </Bar>
          </FixedBar>
          <Main data-menu-open={this.state.showMobileMenu}>
            <TabletDesktopMenu>
              <MainMenu />
            </TabletDesktopMenu>
            <Content>
              {children}
            </Content>
          </Main>
        </Box>
      </Flex>
    )
  }

  private toggleMenu() {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }
}
