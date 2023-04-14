import styled from "styled-components";

const StyledMessage = styled.div`
margin: 3px;
background-color: ${props => props.theme.colors.message};
border-radius: 17px;
display: flex;
align-items: flex-end;
padding: 10px;
max-width: 70vw;
`

const StyledMessageText = styled.div`
font-family: arial, sans-serif;
font-size: 15px;
line-height: 19px;
text-align: left;
white-space: normal;
word-break: break-word;
`

const StyledMessageTime = styled.div`
font-family: arial, sans-serif;
font-size: 11px;
margin-left: 5px;
color: ${props => props.color || props.theme.colors.text};
`

function Message({text, time}){
    return(
        <StyledMessage>
            <StyledMessageText> {text} </StyledMessageText>
            <StyledMessageTime> {time} </StyledMessageTime>
        </StyledMessage>
    )
}

export default Message