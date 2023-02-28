import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function Back() {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity onPress={goBack}>
      <AntDesign name="back" size={32} color={"#BBBBBB"} />
    </TouchableOpacity>
  );
}
