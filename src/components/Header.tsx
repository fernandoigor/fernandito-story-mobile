import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import Back from "./Back";
import Logout from "./Logout";
type HeaderProps = {
  backEnabled?: boolean;
};

export default function Header({ backEnabled = false }: HeaderProps) {
  const { user } = useContext(AuthContext);
  return (
    <View className="w-full pt-4 h-20 bg-black/60 flex-row border-b-2 border-[#83d3cd]/10  items-center justify-between px-8">
      {backEnabled ? <Back /> : <View></View>}
      <View className="flex-row items-center justify-between max-w-48">
        <Text className="text-xl text-[#1db890] font-bold mr-4">
          Olá, {user.firstName}
        </Text>
        <Logout />
      </View>
    </View>
  );
}
