import styled from "styled-components";
import { TopBar } from "./top-bar.tsx";

import { Home } from "./home.tsx";
import { About } from "./about.tsx";
import { Contact } from "./contact.tsx";
import { Links } from "./links.tsx";

const App = () => {
  return (
    <Wrapper>
      <TopBar>
        <Links />
      </TopBar>
      <Home />
      <About />
      <Contact />
    </Wrapper>
  );
};
export default App;

const Wrapper = styled.div`
  background: lightskyblue;
  /* padding: 3rem 7.5rem; */
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  border: red 2px solid;
  /* height: 300vh; */
  margin-top: 8rem;
`;
