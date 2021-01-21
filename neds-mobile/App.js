import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppProvider from "@neds/components/common/AppProvider";
import RacingScreen from "@neds/components/screens/RacingScreen/container";
import { Ionicons } from "@expo/vector-icons";
import LoadScreen from "@neds/components/screens/LoadScreen";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    })();
  }, [setIsReady]);

  return (
    <AppProvider>
      {isReady ? <RacingScreen /> : <LoadScreen />}
      <StatusBar style="auto" hidden />
    </AppProvider>
  );
};

export default App;
