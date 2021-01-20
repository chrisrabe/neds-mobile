import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

// TODO make this look nicer in future
const LoadScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Loading assets...</Text>
    </SafeAreaView>
  );
};

export default LoadScreen;
