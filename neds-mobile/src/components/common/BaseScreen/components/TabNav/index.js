import React from "react";
import { Button, Footer, FooterTab, Icon, Text } from "native-base";
import styles from "./styles";
import { colors } from "@neds/utils/theme";

const TabNav = () => {
  return (
    <Footer>
      <FooterTab style={{ backgroundColor: "white", border: "none" }}>
        <Button vertical style={styles.activeTab}>
          <Icon type="FontAwesome5" name="stopwatch" style={styles.tabText} />
          <Text style={styles.tabText}>Next to go</Text>
        </Button>
        <Button vertical disabled style={styles.disabledTab}>
          <Icon type="FontAwesome5" name="bell" style={styles.disabledText} />
          <Text style={styles.disabledText}>Notifications</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default TabNav;
