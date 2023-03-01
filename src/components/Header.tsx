import { View } from "react-native";
import Back from "./Back";
import Logout from "./Logout";
type HeaderProps = {
  backEnabled?: boolean;
};

export default function Header({ backEnabled = false }: HeaderProps) {
  return (
    <View className="w-full mt-8 pt-4 h-20 flex-row items-center justify-between px-8">
      {backEnabled ? <Back /> : <View></View>}
      {/* <View className="flex-row items-center justify-between max-w-48"> */}

      <Logout />
      {/* </View> */}
    </View>
  );
}
