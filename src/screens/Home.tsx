import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import React, { useContext } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import BoxDaily, { DAY_SIZE } from "../components/BoxDaily";
import GlassBox from "../components/GlassBox";
import LittleButton from "../components/LittleButton";
import Logo from "../components/Logo";
import Logout from "../components/Logout";
import { AuthContext } from "../contexts/AuthContext";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

const bgStars = require("../assets/bg-new-space-stars.jpg");

const weekDayList = ["D", "S", "T", "Q", "Q", "S", "S"];
const monthList = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimunSummaryDatesSizes = 18 * 5;
// const minimunSummaryDatesSizes = 30;
// const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearStart.length;
const amountOfDaysToFill = 100;

const dayList = [
  { day: "2022-02-26", total: 1 },
  { day: "2022-02-27", total: 5 },
  { day: "2022-02-28", total: 2 },
  { day: "2022-03-01", total: 3 },
  { day: "2022-03-02", total: 1 },
  { day: "2022-03-03", total: 0 },
  { day: "2022-03-04", total: 0 },
  { day: "2022-03-05", total: 0 },
  { day: "2022-03-06", total: 3 },
  { day: "2022-03-07", total: 4 },
  { day: "2022-03-08", total: 5 },
  { day: "2022-03-03", total: 0 },
  { day: "2022-03-04", total: 0 },
  { day: "2022-03-05", total: 0 },
  { day: "2022-03-06", total: 3 },
  { day: "2022-03-07", total: 4 },
  { day: "2022-03-08", total: 5 },
];
export default function Home() {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation();

  return (
    <View className="bg-cyan-100 flex-1 justify-center items-center">
      <ImageBackground
        source={bgStars}
        resizeMode="cover"
        className="flex-1 w-full h-full justify-start items-center"
      >
        <View className="flex-1 w-full h-full pt-12 justify-start items-center bg-black/20">
          <GlassBox>
            <View className="w-full h-20 flex-row justify-between items-center">
              <Text className="text-xl text-white font-bold mr-4">
                Olá, {user.firstName}
              </Text>
              <Logout />
            </View>
          </GlassBox>
          <View className="w-10/12 items-center justify-between flex-row">
            <Logo />
            <LittleButton>
              <View className="flex-row items-center justify-between">
                <AntDesign name="plus" size={24} color={"#cccccc"} />
                <Text className="ml-2 text-gray-300 text-lg font-semibold">
                  Novo
                </Text>
              </View>
            </LittleButton>
          </View>
          <GlassBox>
            <View className="flex-row mt-2">
              {weekDayList.map((weekDay, index) => (
                <BoxDaily key={index} weekDay={weekDay} />
              ))}
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 300 }}
            >
              <View className="flex-row flex-wrap">
                {datesFromYearStart.map((date, index) => {
                  // const dayWithHabits = summary.find((day) => {
                  //   return dayjs(date).isSame(day.date, "day");
                  // });

                  const TODO_TOTAL = Math.floor(Math.random() * 10);

                  const dataBox = dayjs(date);
                  const weekDay = dataBox.day();
                  const monthNumber = dataBox.month();

                  const dateOfMonth = dataBox.date();
                  const monthName = (
                    <View className="w-full mt-4">
                      <Text className="text-gray-400">
                        {monthList[monthNumber]}
                      </Text>
                    </View>
                  );
                  const boxCompleteEndMonth = Array.from({
                    length: weekDay,
                  }).map((_, index) => (
                    <View
                      key={`completedEndMonth_${monthNumber}_${index}`}
                      className="rounded-md border-2 border-[#83d3cd]/0"
                      style={{
                        width: DAY_SIZE,
                        height: DAY_SIZE,
                        marginLeft: 8,
                        marginTop: 8,
                      }}
                    />
                  ));

                  return (
                    <>
                      {dateOfMonth == 1 && monthName}
                      {dateOfMonth == 1 &&
                        boxCompleteEndMonth.length > 0 &&
                        boxCompleteEndMonth}
                      <BoxDaily key={date.toISOString()} total={TODO_TOTAL} />
                    </>
                  );
                })}
              </View>
            </ScrollView>
          </GlassBox>
        </View>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
