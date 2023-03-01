import { Dimensions, Text, View } from "react-native";

const WEEK_DAYS = 7;
const GLASSBOX_PADDING_HORIZONTAL = 4 * 4 * 2;

const SCREEN_HORIZONTAL_PADDING = (Dimensions.get("screen").width / 12) * 2;

const DAY_MARGIN_BETWEEN = 8;

const TOTAL_MARGIN = WEEK_DAYS * DAY_MARGIN_BETWEEN;

export const DAY_SIZE =
  (Dimensions.get("screen").width -
    SCREEN_HORIZONTAL_PADDING -
    GLASSBOX_PADDING_HORIZONTAL -
    TOTAL_MARGIN -
    DAY_MARGIN_BETWEEN) /
  7;

const listColors = [
  "bg-white/0",
  "bg-violet-900",
  "bg-violet-800",
  "bg-violet-700",
  "bg-violet-600",
  "bg-violet-500",
  "bg-violet-400",
  "bg-violet-300",
  "bg-violet-200",
  "bg-violet-100",
];

type BoxDailyProps = {
  weekDay?: String;
  total?: Number;
};

export default function BoxDaily({ weekDay, total }: BoxDailyProps) {
  total = total ?? 0;
  const totalActions = (total > 8 ? 8 : total) as number;
  if (weekDay) {
    return (
      <>
        <View
          className="rounded-md border-2 border-white/0 text-white items-center"
          style={{ width: DAY_SIZE, marginLeft: 8 }}
        >
          <Text className="text-gray-400">{weekDay}</Text>
        </View>
      </>
    );
  }
  return (
    <View
      className={`rounded-md border-2 border-[#83d3cd]/50 text-[#83d3cd] items-center ${listColors[totalActions]}`}
      style={{ width: DAY_SIZE, height: DAY_SIZE, marginLeft: 8, marginTop: 8 }}
    />
  );
}
