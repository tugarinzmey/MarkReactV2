import styled from "styled-components"
import TopbarTitle from "./TopbarTitle"
import Button from "../../../../common/components/Button"
import { galleryIcon, infoIcon, searchIcon } from "../../../../assets/icons"

const StyledTopbar = styled.div`
height: 56px;
background-color: ${props => props.color || props.theme.colors.primary};
width: 100%;
margin-left: 1px;
display: flex;
align-items: center;
`
function Topbar(){
    return(
        <StyledTopbar>
            <TopbarTitle />
            <Button icon={searchIcon} />
            <Button icon={galleryIcon} />
            <Button icon={infoIcon} />
        </StyledTopbar>
    )
}
export default Topbar