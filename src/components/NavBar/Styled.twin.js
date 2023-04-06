import tw, { styled } from 'twin.macro';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  height: 60px;
  background-color: antiquewhite;
  color: #444444;
  display: flex;
  flex-direction: row;

  line-height: 60px;
  text-align: center;
`

export const NavList = styled.div`
  background-color: #bfc;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

export const NavItem = styled(NavLink)`
  background-color: #61dafb;
  flex-grow: 1;
  
  cursor: pointer;
`

export const LogoWrapper = styled.div`
  background-color: blueviolet;
  width: 200px;

  cursor: pointer;
`

export const MoreWrapper = styled(LogoWrapper)`
  
`

