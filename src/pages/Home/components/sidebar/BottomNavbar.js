import styled from "styled-components"
import Button from "../../../../common/components/Button"
import { contactsIcon, messageIcon, settingsIcon } from '../../../../assets/icons/index'

const StyledBottomNavbar = styled.div`
border-top: 1px solid ${props => props.color || props.theme.colors.background}; //destr
height: 52px;
display: flex;
justify-content: space-around;
align-items: center;
`

function BottomNavbar() {
    return (
        <StyledBottomNavbar>
            <Button icon={contactsIcon}> Контакты </Button>
            <Button icon={messageIcon}> Чаты </Button>
            <Button icon={settingsIcon}> Настройки </Button>
        </StyledBottomNavbar>
    )
}

export default BottomNavbar