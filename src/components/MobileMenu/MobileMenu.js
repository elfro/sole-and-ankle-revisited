/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' size={24}/>
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </CloseButton>
        <Side />
        <Menu>
          <MenuItem href="/sale">Sale</MenuItem>
          <MenuItem href="/new">New&nbsp;Releases</MenuItem>
          <MenuItem href="/men">Men</MenuItem>
          <MenuItem href="/women">Women</MenuItem>
          <MenuItem href="/kids">Kids</MenuItem>
          <MenuItem href="/collections">Collections</MenuItem>
        </Menu>
        <Footer>
          <FooterItem href="/terms">Terms and Conditions</FooterItem>
          <FooterItem href="/privacy">Privacy Policy</FooterItem>
          <FooterItem href="/contact">Contact Us</FooterItem>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
      transform: translateX(100%);
  }
  to {
      transform: translateX(0);
  }  
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: var(--color-overlay-gray);
  animation: ${fadeIn} 500ms;  
`;

const Content = styled(DialogContent)`
  position: relative;
  left: 20%;
  width: 80%;
  height: 100%;
  padding: 32px;  
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  overflow: auto;
  @media (prefers-reduced-motion: no-preference) {
      animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.99, 1.08) 200ms;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;  
`;

const MenuItem = styled.a`
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);
  text-transform: uppercase;
  text-decoration: none;
  
  &:hover {
      color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 11px;
`;

const FooterItem = styled.a`
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
      text-decoration: revert;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: fixed;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Side = styled.div`
  flex: 1;
`;
export default MobileMenu;
