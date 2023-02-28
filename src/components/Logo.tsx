import { Text } from "react-native";

export default function Logo() {
  return (
    <>
      <Text
        style={{
          fontSize: 64,
          color: "#FFFFFF",
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
        }}
      >
        Story
      </Text>
      <Text
        style={{
          fontFamily: "AlexBrushRegular",
          fontSize: 32,
          color: "#2c2c2c",
          textShadowColor: "rgba(255, 255, 255, 0.95)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 5,
          top: -36,
          left: 10,
          position: "relative",
        }}
      >
        fernandito
      </Text>
    </>
  );
}
