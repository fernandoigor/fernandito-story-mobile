import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";

const bgStars = require("../assets/bg-stars.jpeg");

export default function Home() {
  const [keepLogged, setKeepLogged] = useState<Boolean>(false);
  const { logout } = useContext(AuthContext);
  const { navigate } = useNavigation();

  const handleLogin = () => {
    console.log("Login");
  };
  const handleRegister = () => {
    console.log("handleRegister");
    navigate("Register");
  };
  const handleLogout = () => {
    console.log("handleRegister");
    logout();
  };

  return (
    <View className="bg-cyan-100 flex-1 justify-center items-center">
      <ImageBackground
        source={bgStars}
        className="flex-1 w-full h-full justify-start items-center"
      >
        <Header backEnabled />

        <Text className="text-2xl text-white font-bold bg-black/40 w-full py-4 text-center">
          home
        </Text>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
