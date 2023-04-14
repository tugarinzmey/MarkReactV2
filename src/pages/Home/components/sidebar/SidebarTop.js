import styled from "styled-components"
import { othersIcon, writeIcon } from '../../../../assets/icons/index'
import Button from "../../../../common/components/Button"

const StyledTopWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 56px;
`

const StyledTabTitle = styled.span`
color: black;
font-size: 16px;
font-family: arial, sans-serif;
text-align: center;
font-weight: 700;
`

function SidebarTop() {
    return (
        <StyledTopWrapper>
            <Button icon={othersIcon} alt=""></Button>
            <StyledTabTitle>Чаты</StyledTabTitle>
            <Button icon={writeIcon} alt=""></Button>
        </StyledTopWrapper>
    )
}

export default SidebarTop