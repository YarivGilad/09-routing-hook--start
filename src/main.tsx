import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./view/app.tsx";
import GlobalStyles from "./styles/reset.css.ts";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
