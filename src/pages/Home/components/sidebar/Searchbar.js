import { searchIcon } from "../../../../assets/icons/index"
import styled from "styled-components";

const StyledSearchbarWrapper = styled.div`
width: 100%;
padding: 0px 15px;
`

const StyledSearchbar = styled.button`
width: 100%;
border: 0;
height: 35px;
display: flex;
border-radius: 16px;
margin-bottom: 12px;
overflow:hidden;
background-color: ${props => props.color || props.theme.colors.background};
align-items: center;
`

const StyledSearchField = styled.input`
height: 32px;
border: 0;
width: 100%;
background-color: ${props => props.color || props.theme.colors.background};
outline: none;
&:focus{
    outline: none;
}
`

const StyledSearchIcon = styled.img`
height: 16px;
width: 16px;
margin: 5px
`

function Searchbar() {
    return (
        <StyledSearchbarWrapper>
            <StyledSearchbar>
                <StyledSearchIcon src={searchIcon} className="search-icon" alt=""></StyledSearchIcon>
                <StyledSearchField type="text" placeholder="Поиск"></StyledSearchField>
            </StyledSearchbar>
        </StyledSearchbarWrapper>
    )
}

export default Searchbar;