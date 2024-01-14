import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton/UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
{/*          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>*/}
          <NavLink href="/sale">A Vente</NavLink>
          <NavLink href="/new">New&nbsp;Nouvelles Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <ButtonWrapper>
            <Icon id="shopping-bag" strokeWidth={2} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Icon id="search" strokeWidth={2} />
          </ButtonWrapper>
          <ButtonWrapper
            onClick={() => setShowMobileMenu(true)}
          >
            <Icon id="menu" strokeWidth={2} />
          </ButtonWrapper>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  ${QUERIES.tabletAndLess} {
      justify-content: space-between;
      align-items: center;
      border-top: 4px solid var(--color-gray-900);
  }
    
  ${QUERIES.mobileAndLess} {
      padding: 18px 16px;
  }  
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 6vw - 3rem, 3rem);
  margin: 0px 48px;

  ${QUERIES.tabletAndLess} {
      display: none;
  }
`;

const MobileNav = styled.nav`
  display: none; 

  ${QUERIES.tabletAndLess} {
      display: flex;
      gap: 32px;
      color: var(--color-gray-900);
      margin-left: 32px;
  }

  ${QUERIES.mobileAndLess} {
      gap: 16px;
      margin-left: 16px;
  }
`;

const ButtonWrapper = styled(UnstyledButton)`
`;

const LogoWrapper = styled.div`
  flex: 1;

  ${QUERIES.tabletAndLess} {
      display: revert;
  }  
`;

const Side = styled.div`
  flex: 1;

  ${QUERIES.tabletAndLess} {
      display: none;
  }  
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-wrap: nowrap;  

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
