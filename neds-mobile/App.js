import { StatusBar } from "expo-status-bar";
import React from "react";
import AppProvider from "@neds/components/common/AppProvider";
import RacingScreen from "@neds/components/screens/RacingScreen";

const App = () => {
  return (
    <AppProvider>
      <RacingScreen />
      <StatusBar style="auto" hidden />
    </AppProvider>
  );
};

export default App;
