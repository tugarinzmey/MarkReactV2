import styled from "styled-components"
import { favouritesIcon } from "../../../../assets/icons"

const StyledAvatar = styled.img`
border-radius: 16px;
height: 32px;
min-height: 32px;
min-width: 32px;
width: 32px;
`

const StyledDialogTitle = styled.span`
font-size: 16px;
font-family: arial, sans-serif;
padding-left: 10px;
`

const StyledTopbarTitleWrapper = styled.div`
flex: 5 1;
display: flex;
align-items: center;
padding-left: 30px;
`

function TopbarTitle() {
    return (
        <StyledTopbarTitleWrapper>
            <StyledAvatar src={favouritesIcon}></StyledAvatar>
            <StyledDialogTitle>Избранное</StyledDialogTitle>
        </StyledTopbarTitleWrapper>
    )
}
export default TopbarTitle