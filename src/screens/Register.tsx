import { useNavigation } from "@react-navigation/native";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

const bgNewSpace = require("../assets/bg-new-space.jpeg");

export default function Login() {
  const { navigate, goBack } = useNavigation();

  const handleBack = () => {
    console.log("Back Login");
    goBack();
  };
  const handleRegister = () => {
    console.log("handleRegister");
    navigate("Register");
  };

  return (
    <View className="bg-cyan-100 flex-1 justify-center items-center">
      <ImageBackground source={bgNewSpace} className=" w-full h-full ">
        <ScrollView className="flex-1 w-full h-full">
          <View className="w-full h-full justify-around items-center">
            <View className={`mt-16 py-4 w-8/12 items-center justify-center `}>
              <Logo />
            </View>
            <View className="w-full items-center pb-8">
              <Input placeholder="Nome" keyboardType="ascii-capable" />
              <Input placeholder="Sobrenome" keyboardType="ascii-capable" />
              <Input placeholder="Email" keyboardType="email-address" />
              <Input placeholder="Senha" secureTextEntry />
              <Input placeholder="Senha novamente" secureTextEntry />

              <Button primary={false} onPress={handleRegister}>
                <Text className="font-bold text-gray-200">Registrar</Text>
              </Button>
              <Button onPress={handleBack}>
                <Text className="font-bold text-gray-900">Voltar</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
