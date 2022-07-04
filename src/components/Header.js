import styled from "styled-components";
import logo from '../logo.png';
import { BiCart, BiSearch } from 'react-icons/bi';

function Searchbar() {
  const Searchbar = styled.div`
    display: flex;
    border-radius: 7px;
    height: 50px;
    width: 100%;
    margin: 10px;
  `;

  const Button = styled.button`
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

  const Input = styled.input`
    width: 100%;
    font-size: 21px;
    padding: 10px;
    border-radius: 7px 0 0 7px;
    border: 1px solid #777;
    color: #777;
  `;

  return (
    <Searchbar>
      <Input placeholder="Search..."></Input>
      <Button>
        <BiSearch></BiSearch>
      </Button>
    </Searchbar>
  );
}

function Header() {
  const Header = styled.header`
    display: grid;
    height: 98px;
    padding: 10px;
    grid-template-columns: 2fr 7fr 1fr;
    background-color: cadetblue;
  `;

  const Container = styled.div`
    display: flex;
    max-height: 80%;
    justify-content: center;
    align-items: center;
  `;

  const Logo = styled.img`
    max-height: 100%;
    object-fit: contain;
  `;

  const ShoppingCart = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 42px;
  `;

  return (
    <Header data-testid='header'>
      <Container>
        <Logo src={logo} alt="logo"></Logo>
      </Container>
      <Container>
        <Searchbar></Searchbar>
      </Container>
      <Container>
        <ShoppingCart href="/">
          <BiCart></BiCart>
        </ShoppingCart>
      </Container>
    </Header>
  );
}

export default Header;
