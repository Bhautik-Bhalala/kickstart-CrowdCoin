import React from "react";
import { Menu , Container} from "semantic-ui-react";
import Header from "./Header";

export default (props) => {
  return (
    <Container>
    <Header />
      {/* <h1>I am a Header</h1> */}
      {props.children}
    </Container>
  );
};
