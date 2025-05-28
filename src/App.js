import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import LockScreen from "./components/LockScreen";
import UnlockedScreen from "./components/UnlockedScreen";
import { styles } from "./styles/styles";
import { BACKGROUND_IMAGE } from "./constants/images";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={styles.background}
        resizeMode="cover"
      >
        {unlocked ? (
          <UnlockedScreen />
        ) : (
          <LockScreen setUnlocked={setUnlocked} />
        )}
      </ImageBackground>
    </View>
  );
}
