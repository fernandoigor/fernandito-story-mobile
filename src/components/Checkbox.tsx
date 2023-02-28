import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
type CheckBoxProps = {
  onCheck?: (state: Boolean) => void;
};
export default function Checkbox({ onCheck }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);
  const styles = {
    box: `w-8 h-8 ${
      checked ? "bg-[#1db890]" : "bg-black/80"
    } rounded-md border-2 border-[#83d3cd]/70`,
  };

  const handleClicked = () => {
    setChecked((prev) => {
      if (onCheck) {
        onCheck(!prev);
      }
      return !prev;
    });
  };
  return (
    <View className={styles.box}>
      <TouchableOpacity className="w-8 h-8" onPress={handleClicked}>
        {checked && <Ionicons name="md-checkmark" size={28} color="white" />}
      </TouchableOpacity>
    </View>
  );
}
