import {Box} from 'indoqa-react-fela'
import React from 'react'
import {NavLink} from 'react-router-dom'

import Menu from '../molecules/Menu'
import MenuLink from '../molecules/MenuLink'

const MainMenu = () => (
  <Menu>
    <Box pb={2} />
    <MenuLink>
      <NavLink to="/" exact>Overview</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/time">Time</NavLink>
    </MenuLink>
  </Menu>
)

export default MainMenu
