import React from "react";
import PropTypes from "prop-types";
import { Container, Content, View } from "native-base";
import AppHeader from "./components/AppHeader";
import TabNav from "./components/TabNav";
import ScreenHeading from "./components/ScreenHeading";
import styles from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

const BaseScreen = ({ children, headingText }) => {
  return (
    <Container>
      <AppHeader />
      <Content style={styles.content}>
        <ScreenHeading headingText={headingText} />
        <View style={{ padding: RFValue(20) }}>{children}</View>
      </Content>
      <TabNav />
    </Container>
  );
};

BaseScreen.propTypes = {
  children: PropTypes.node.isRequired,
  headingText: PropTypes.string.isRequired,
};

export default BaseScreen;
