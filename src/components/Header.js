import styled from "styled-components";
import logo from '../logo.png';
import { BiCart, BiSearch } from 'react-icons/bi';

const StyledSearchbar = styled.div`
    display: flex;
    border-radius: 7px;
    height: 50px;
    width: 100%;
    margin: 10px;
`;

const StyledButton = styled.button`
  height: 100%;
  width: 50px;
  font-size: 27px;
  color: white;
  background-color: #333;
  border: 0;
  border-radius: 0 7px 7px 0;
  &:hover {
    background-color: #555;
  }
  &:active {
    background-color: #666;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 21px;
  padding: 10px;
  border-radius: 7px 0 0 7px;
  border: 1px solid #777;
  color: #777;
`;

const StyledHeader = styled.header`
  display: grid;
  height: 98px;
  padding: 10px;
  grid-template-columns: 2fr 7fr 1fr;
  background-color: ghostwhite;
`;

const StyledContainer = styled.div`
  display: flex;
  max-height: 80%;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  max-height: 100%;
  object-fit: contain;
`;

const StyledShoppingCart = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 42px;
`;

function Searchbar() {
  return (
    <StyledSearchbar>
      <StyledInput placeholder="Search..."></StyledInput>
      <StyledButton>
        <BiSearch></BiSearch>
      </StyledButton>
    </StyledSearchbar>
  );
}

function Header() {
  return (
    <StyledHeader data-testid='header'>
      <StyledContainer>
        <StyledLogo src={logo} alt="logo"></StyledLogo>
      </StyledContainer>
      <StyledContainer>
        <Searchbar></Searchbar>
      </StyledContainer>
      <StyledContainer>
        <StyledShoppingCart href="https://youtu.be/dQw4w9WgXcQ">
          <BiCart></BiCart>
        </StyledShoppingCart>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
