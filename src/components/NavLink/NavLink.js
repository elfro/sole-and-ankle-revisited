import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

function NavLink({href, children}) {
  return (
    <Link href={href}>
      <Text>{children}</Text>
      <SubText aria-hidden={true}>{children}</SubText>
    </Link>
  );
}

const Link = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-wrap: nowrap;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
    --translate-from: 0;
    --translate-to: -100%;

    display: block;
    will-change: transform;
    transition: 500ms ease;
    transform: translateY(var(--translate-from));

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
        ${Link}:hover &,
        ${Link}:focus & {
            transform: translateY(var(--translate-to));
            transition: 250ms ease;
        }
    }
`;

const SubText = styled(Text)`
    --translate-from: 100%;
    --translate-to: 0;

    position: absolute;
    font-weight: ${WEIGHTS.bold};
    top: 0;
    left: 0;
`;
export default NavLink;
