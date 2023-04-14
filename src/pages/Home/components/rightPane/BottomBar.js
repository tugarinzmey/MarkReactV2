import styled from "styled-components"
import Button from "../../../../common/components/Button"
import {chatAddIcon, voiceMessageIcon} from "../../../../assets/icons"
import ChatInput from "./Chat/ChatInput"

const StyledBottomBar = styled.div`
height: 52px;
width: 100%;
margin-left: 1px;
display: flex;
align-items: center;
`
function BottomBar(){
    return(
        <StyledBottomBar>
            <Button icon={chatAddIcon} />
            <ChatInput />
            <Button icon={voiceMessageIcon} />
        </StyledBottomBar>
    )
}
export default BottomBar