import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";

export default function UnlockedScreen() {
  return (
    <View style={styles.unlockedScreen}>
      <Text style={styles.unlockedText}>Unlocked!</Text>
    </View>
  );
}
