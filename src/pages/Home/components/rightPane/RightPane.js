import styled from "styled-components"
import Topbar from "./Topbar"
import Chatbox from "./Chat/Chatbox"
import BottomBar from "./BottomBar" 

const StyledRightPaneWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
overflow: hidden;
justify-content: space-between;
flex: 1 1;
`

function RightPane() {
    return (
        <StyledRightPaneWrapper className="right-pane-wrapper">
            <Topbar />
            <Chatbox />
            <BottomBar />
        </StyledRightPaneWrapper>
    )
}
export default RightPane