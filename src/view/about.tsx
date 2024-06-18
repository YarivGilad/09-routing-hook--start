import styled from "styled-components";
import { flexbox } from "../styles/mixins.ts";

export function About(){
  return (
    <Box>
      <h1>About everything that matters</h1>
    </Box>
  );
}

const Box = styled.div`
  ${flexbox()}
  height: 100vh;
  background-color: limegreen;
  width: 95vw;

  h1{
      font-size: 5rem;
      font-weight: normal;
      font-family: "Griffy", cursive;
      text-align: center;
      color: mintcream;
  }
`;
