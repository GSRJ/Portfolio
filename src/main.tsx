import { NavBar } from "@/components/Navbar";
import { Home } from "@/pages/home";
import { GlobalStyle } from "@/styles/Global";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </GlobalStyle>
  </React.StrictMode>
);
