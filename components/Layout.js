import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Container>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
