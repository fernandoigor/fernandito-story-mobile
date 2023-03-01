import { ReactNode } from "react";
import { View } from "react-native";

type GlassBoxProps = {
  children: ReactNode;
};
export default function GlassBox({ children }: GlassBoxProps) {
  return (
    <View className="w-10/12 mt-4 px-4 bg-black/60 rounded-md border-2 border-[#83d3cd]/10 text-[#83d3cd]">
      {children}
    </View>
  );
}
