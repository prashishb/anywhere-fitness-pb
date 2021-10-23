import { SidebarData } from './SidebarData';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';

export default function Sidebar() {
  return (
    <SidebarNav>
      <SidebarWrap>
        {SidebarData.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </SidebarWrap>
    </SidebarNav>
  );
}

const SidebarNav = styled.nav`
  background: #15171c;
  width: 15.625rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: calc(3.938rem + 0.01rem);
  z-index: 10;
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
