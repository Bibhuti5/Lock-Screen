import React from "react";
import { View, Text, Animated, PanResponder, Dimensions } from "react-native";
import { styles } from "../styles/styles";

const { width } = Dimensions.get("window");

export default function LockScreen({ setUnlocked }) {
  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], {
      useNativeDriver: false
    }),
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > width * 0.6) {
        setUnlocked(true);
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }
    }
  });

  return (
    <View style={styles.lockScreen}>
      <Text style={styles.time}>12:45</Text>
      <Text style={styles.date}>Tuesday, April 23</Text>

      <View style={styles.docContainer}>
        <Text style={styles.docText}>
          This is a preview of a document paragraph. You can display terms,
          notes, or other relevant text here to inform the user before
          unlocking.
        </Text>
      </View>

      <View style={styles.sliderTrack}>
        <Animated.View
          style={[styles.sliderThumb, { transform: [{ translateX: pan.x }] }]}
          {...panResponder.panHandlers}
        />
        <Text style={styles.sliderLabel}>Slide to unlock</Text>
      </View>
    </View>
  );
}
