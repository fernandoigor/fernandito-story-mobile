import Constants from "expo-constants";
import { Text, View } from "react-native";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Routes } from "./routes/";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    AlexBrushRegular: require("./assets/fonts/AlexBrush-Regular.ttf"),
  });

  const version = Constants.manifest?.version ?? "0.0.0";
  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <AuthContextProvider>
      <Routes />
      <View className="absolute bottom-2 right-4 opacity-40">
        <Text className="font-bold text-sm">fernandito - Story v{version}</Text>
      </View>
    </AuthContextProvider>
  );
}
