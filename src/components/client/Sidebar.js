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

const DropdownLink = styled(Link)`
  background: #414757;
`;

const StyledRow = styled.li`
  width: 100%;
  height: 50px;
  list-style-type: none;
  margin: 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  padding: 20%;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #293846;
  }
`;

const StyledSideBarList = styled.ul`
  height: auto;
  padding: 0;
  width: 100%;
`;

const StyledSideBar = styled.div`
  height: 100%;
  width: 15.625rem;
  background-color: black;
  margin-top: 0;
  position: fixed;
  z-index: 1000;
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;
