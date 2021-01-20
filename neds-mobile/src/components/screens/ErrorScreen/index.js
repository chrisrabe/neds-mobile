import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

// TODO make this look nicer in future
const ErrorScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.errorText}>Whoops! Something went wrong</Text>
    </SafeAreaView>
  );
};

export default ErrorScreen;
