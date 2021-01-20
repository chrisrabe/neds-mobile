import React from "react";
import { Header, Body, Text, Right } from "native-base";
import styles from "./styles";

const AppHeader = () => {
  return (
    <Header bgPrimary style={styles.container}>
      <Body>
        <Text style={styles.headerText}>neds</Text>
      </Body>
      <Right>
        <Text style={styles.subHeaderText}>Racing</Text>
      </Right>
    </Header>
  );
};

export default AppHeader;
