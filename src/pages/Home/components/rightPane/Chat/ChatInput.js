import styled from "styled-components"
import Button from "../../../../../common/components/Button"
import { smilesIcon } from "../../../../../assets/icons"

const StyledChatInputWrapper = styled.div`
width: 50vw;
background-color: ${props => props.color || props.theme.colors.primary};
height: 36px;
border-radius: 18px;
flex: 1;
margin-right: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledMessageInput = styled.input`
border: none;
height: 100%;
margin-left: 10px;
font-size: 16px;
flex: 1;
&:focus{
    outline: none;
}
`

<<<<<<< Updated upstream
function ChatInput(){
    return(
=======


function ChatInput() {
    const dispatch = useDispatch();
    const [messageInput, setMessageInput] = useState('');

    const handleKeypress = (event) => {
        if (event.charCode === 13 && messageInput.length > 0) {
            clearInput();
            dispatch(sendMessage(messageInput));
        }
    }

    const handleInputChange = (event) => {
        const messageText = event.target.value;
        setMessageInput(messageText)
    }

    const clearInput = () => {
        setMessageInput("");
    }

    return (
>>>>>>> Stashed changes
        <StyledChatInputWrapper>
            <StyledMessageInput type="text" placeholder="Сообщение"/>
            <Button icon={smilesIcon} />
        </StyledChatInputWrapper>
    )
}

export default ChatInput