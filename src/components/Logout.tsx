import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    Alert.alert(
      "Sair?",
      "Será necessário logar utilizando email e senha para acessar seus stories",
      [
        { text: "Sim", onPress: () => logout() },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };
  return (
    <TouchableOpacity onPress={handleLogout}>
      <AntDesign name="logout" size={32} color={"#BBBBBB"} />
    </TouchableOpacity>
  );
}
