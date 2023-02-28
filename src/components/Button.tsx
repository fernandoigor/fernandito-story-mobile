import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  primary?: boolean;
  onPress?: () => void;
  children: ReactNode;
};

const bgNewSpace = require("../assets/bg-new-space.jpeg");

export default function Button({
  onPress,
  children,
  primary = true,
}: ButtonProps) {
  const bgColor = primary ? "bg-[#1db890]/90" : "bg-violet-800/90";
  return (
    <TouchableOpacity
      className={`my-1 w-10/12 ${bgColor} rounded-lg  h-14 items-center justify-center border-2 border-black/10 shadow-md shadow-black`}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
