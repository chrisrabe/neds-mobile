import React from "react";
import PropTypes from "prop-types";
import { Container, Content } from "native-base";
import AppHeader from "./components/AppHeader";
import TabNav from "./components/TabNav";

const BaseScreen = ({ children }) => {
  return (
    <Container>
      <AppHeader />
      <Content>{children}</Content>
      <TabNav />
    </Container>
  );
};

BaseScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseScreen;
