import styled from "styled-components";
import { flexbox } from "../styles/mixins.ts";

export function Home(){
  return (
    <Box>
      <h1>Home is where the heart is :)</h1>
    </Box>
  );
}

const Box = styled.div`
  ${flexbox()}
  height: 100vh;
  background-color: tomato;
  width: 95vw;

  h1{
      font-size: 5rem;
      font-weight: normal;
      font-family: "Griffy", cursive;
      text-align: center;
      color: mintcream;
  }
`;
