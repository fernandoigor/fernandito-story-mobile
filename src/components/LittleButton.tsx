import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  primary?: boolean;
  onPress?: () => void;
  children: ReactNode;
};

const bgNewSpace = require("../assets/bg-new-space.jpeg");

export default function LittleButton({
  onPress,
  children,
  primary = true,
}: ButtonProps) {
  const bgColor = primary ? "bg-[#1db890]/90" : "bg-violet-800/90";
  return (
    <TouchableOpacity
      className={`bg-violet-800/90 py-4 px-4 rounded-lg items-center justify-center border-2 border-black/10 shadow-sm shadow-white/40`}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
