import styled from "styled-components"

const StyledBottomButton = styled.div`
display: flex;
flex-direction: column;
align-items: center
`
const StyledIcon = styled.img`
height: 24px;
width: 24px;
margin: 0px 10px;
cursor: pointer;
`
const StyledTitle = styled.div`
cursor: pointer;
font-size: 11px;
font-weigh: 400;
text-allign: center;
font-family: arial, sans-serif;
color: ${props => props.color || props.theme.colors.text};
`

function Button({icon, children}) {
    return (
        <StyledBottomButton>
            <StyledIcon src={icon} />
            <StyledTitle>{children}</StyledTitle>
        </StyledBottomButton>
    )
}

export default Button