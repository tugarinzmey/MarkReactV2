import SidebarTop from './SidebarTop';
import Searchbar from './Searchbar';
import Contacts from './Contacts';
import BottomNavbar from './BottomNavbar';
import styled from 'styled-components';

const StyledSidebar = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.color || props.theme.colors.primary};
max-width: 280px;
min-width: 150px;
width: 25vw;
height: 100%;
overflow: hidden;
`

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarTop />
      <Searchbar />
      <Contacts />
      <BottomNavbar />
    </StyledSidebar>
  );
}

export default Sidebar;