import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lockScreen: {
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%"
  },
  time: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 10,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  date: {
    fontSize: 18,
    color: "#eee",
    marginBottom: 30,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  docContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  docText: {
    color: "#fff",
    fontSize: 16
  },
  sliderTrack: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 10,
    position: "relative"
  },
  sliderThumb: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    position: "absolute",
    top: 5,
    left: 0,
    zIndex: 1
  },
  sliderLabel: {
    textAlign: "center",
    color: "#eee",
    position: "absolute",
    width: "100%"
  },
  unlockedScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  unlockedText: {
    fontSize: 32,
    color: "green",
    fontWeight: "bold"
  }
});
