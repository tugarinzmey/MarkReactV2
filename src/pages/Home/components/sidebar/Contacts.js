import styled from "styled-components";
import Contact from "../rightPane/Chat/Contact";
import { favouritesIcon } from "../../../../assets/icons";

const StyledScrollbar = styled.div`
inset: 0px;
overflow-y: scroll;
flex: 1 1;
width: 100%;
&::-webkit-scrollbar {
    display: none;
}
`

function Contacts() {
    return (
        <StyledScrollbar>
            <Contact avatar={favouritesIcon} name="Избраннное" />
        </StyledScrollbar>
    )
}

export default Contacts;