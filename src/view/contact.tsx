import styled from "styled-components";
import { flexbox } from "../styles/mixins.ts";

export function Contact(){
  return (
    <Box>
      <h1>Maintain eye contact at all times!</h1>
    </Box>
  );
}

const Box = styled.div`
  ${flexbox()}
  height: 100vh;
  background-color: deeppink;
  width: 95vw;

  h1{
      font-size: 5rem;
      font-weight: normal;
      font-family: "Griffy", cursive;
      text-align: center;
      color: mintcream;
  }
`;
