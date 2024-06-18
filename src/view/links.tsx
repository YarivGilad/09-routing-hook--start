import styled from "styled-components";
import { Link } from "react-router-dom";

export function Links() {
    return (
        <Nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </Nav>
    );
}

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: space-between;

  a{
    color: mintcream;
  }
`;
