import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { AuthContext } from "../contexts/AuthContext";

const bgNewSpace = require("../assets/bg-new-space.jpeg");

export default function Login() {
  const [keepLogged, setKeepLogged] = useState<Boolean>(false);

  const { navigate } = useNavigation();

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    console.log("Login");
    login({ email: "fer@email.com", password: "password" });
  };
  const handleRegister = () => {
    console.log("handleRegister");
    navigate("Register");
  };

  return (
    <View className="bg-cyan-100 flex-1 justify-center items-center">
      <ImageBackground
        source={bgNewSpace}
        className="flex-1 w-full h-full justify-around items-center"
      >
        <View className={`mt-16 py-4 w-8/12 items-center justify-center `}>
          <Logo />
        </View>
        <View className="w-full items-center">
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Password" secureTextEntry />
          <View className="mt-2 mb-8 w-10/12">
            <View className="mx-4 flex-row items-center justify-start">
              <Checkbox />
              <Text
                style={{
                  marginLeft: 8,
                  fontWeight: "bold",
                  textShadowColor: "rgba(255, 255, 255, 1.00)",
                  textShadowOffset: { width: 0, height: 0 },
                  textShadowRadius: 3,
                }}
              >
                Manter Logado
              </Text>
            </View>
          </View>

          <Button onPress={handleLogin}>
            <Text className="font-bold text-gray-900">Login</Text>
          </Button>
          <Button primary={false} onPress={handleRegister}>
            <Text className="font-bold text-gray-200">Registrar</Text>
          </Button>
        </View>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
