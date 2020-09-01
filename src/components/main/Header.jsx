import React from 'react';

import { Link } from 'react-router-dom';

import Menu20 from '@carbon/icons-react/lib/menu/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import User20 from '@carbon/icons-react/lib/user/20';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';

const MainHeader = () => {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="Milkster"></HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">
          <Link to="/home">Home</Link>
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          <Link to="/accounts">Accounts</Link>
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          <Link to="/tags">Tags</Link>
        </HeaderMenuItem>
        <HeaderMenuItem href="#">
          <Link to="/reports">Reports</Link>
        </HeaderMenuItem>
      </HeaderNavigation>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Menu20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <User20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default MainHeader;
