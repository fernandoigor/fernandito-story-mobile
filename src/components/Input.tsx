import { TextInput, TextInputProps } from "react-native";

type InputProps = {};

const bgNewSpace = require("../assets/bg-new-space.jpeg");

export default function Input({ ...props }: TextInputProps) {
  return (
    <TextInput
      className="my-2 w-10/12 h-16 px-4 bg-black/80 rounded-md border-2 border-[#83d3cd]/10 text-[#83d3cd] focus:shadow-xl focus:shadow-white focus:border-[#83d3cd]/30"
      placeholderTextColor={"#999999"}
      {...props}
    />
  );
}
