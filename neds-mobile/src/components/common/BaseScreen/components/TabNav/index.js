import React from "react";
import { Button, Footer, FooterTab, Icon, Text } from "native-base";

const TabNav = () => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon type="FontAwesome5" name="stopwatch" />
          <Text>Next to go</Text>
        </Button>
        <Button vertical disabled>
          <Icon type="FontAwesome5" name="bell" />
          <Text>Notifications</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default TabNav;
