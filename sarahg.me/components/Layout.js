import React from "react";
import Head from "next/head";
import { Container } from "reactstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default ({ children, title = "Sarah Goon's Portfolio" }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <header className="header">
      <NavBar />
    </header>
    <main role="main">
      <Container className="main-root">{children}</Container>
    </main>
    <Footer />
  </div>
);
