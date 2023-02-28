import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import AuthRoutes from "./Auth";
import RoutesApp from "./RoutesApp";

export function Routes() {
  const { user } = useContext(AuthContext);
  const { signed } = user;
  return (
    <NavigationContainer>
      {!signed ? <AuthRoutes /> : <RoutesApp />}
    </NavigationContainer>
  );
}
