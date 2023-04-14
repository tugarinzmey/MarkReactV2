import styled from "styled-components";

const StyledContact = styled.div`
width: 100%;
display: flex;
height: 72px;
padding: 8px;
cursor: pointer;
&:hover{
    background-color: ${props => props.theme.colors.background};
}
`

const StyledAvatarBlock = styled.div`
width: 72px;
display: inline-flex;
align-items: center;
justify-content: center;
height: 100%;
`

const StyledAvatar = styled.img`
border-radius: 26px;
height: 52px;
width: 52px;
`

const StyledContactInfo = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`

const StyledContactName = styled.div`
color: ${props => props.theme.colors.contactName};
display: block;
margin-left: 5px;
`

const StyledLastMessage = styled.div`
font-family: arial, sans-serif;
font-size: 13px;
margin-left: 5px;
color: ${props => props.color || props.theme.colors.text};
`

function Contact({ avatar, name }) {
    return (
        <StyledContact>
            <StyledAvatarBlock>
                <StyledAvatar src={avatar} />
            </StyledAvatarBlock>
            <StyledContactInfo>
                <StyledContactName> {name} </StyledContactName>
                <StyledLastMessage> abc </StyledLastMessage>
            </StyledContactInfo>
        </StyledContact>
    )
}

export default Contact