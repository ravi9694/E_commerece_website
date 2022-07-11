import styled from "styled-components";
import { Link } from "react-router-dom";

// let url = "https://makeup-api.herokuapp.com/api/v1/products.json";
// function getproductlist(url)
// {
//   console.log("I am also fine");
//   <Login/>
// }

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  /* box-shadow: 0px 10px 5px rgba(255, 0, 0, 0.2); */
  white-space: nowrap;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  color: #111;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
`;

const Left = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Searchbar = styled.div`
  border: 0.05px solid lightgray;
  padding: 0 0.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  max-width: 250px;
  width: 100%;
  height: 2rem;
  @media (max-width: 768px) {
    width: 90%;
    height: 1.5rem;
  }
`;

const Input = styled.input`
  border: none;
  width: 80%;
  font-size: 0.8rem;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 3%;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Searchbar>
            <Input type="text" placeholder="Search" />
          </Searchbar>
        </Left>
        <Center>
          <Link to="/">
            <Logo>Monsoon</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to={"/SignUp"}>Sign Up</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/Login"}>Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/cart"} className="fa-solid fa-cart-arrow-down"></Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
