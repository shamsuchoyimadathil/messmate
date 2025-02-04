import React, { FC, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import MModal from "./Modal";
import { Calendar } from "react-native-calendars";
import { ThemedText } from "../ThemedText";
import { AntDesign } from "@expo/vector-icons";

const DatePicker: FC<{
  onChange?: (v?: string) => void;
  value?: string;
  placeholder?: string;
  onCancel?: () => void;
}> = ({ onChange, value, placeholder }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<null | string>("");
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setShowModal(true)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          width: "100%",
          padding: 12,
          paddingTop: 8,
          paddingBottom: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: value ? "#000" : "#ccc" }}>
          {value ?? "Selecte Date"}
        </Text>
        <AntDesign name="calendar" size={16} color={value ? "#000" : "#ccc"} />
      </TouchableOpacity>
      <MModal
        showModal={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        showFooter={false}
        showTitle={false}
        styles={{ contentWrapper: { width: "auto", paddingBottom: 0 } }}
      >
        <Calendar
          minDate={currentDate}
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "gray",
          }}
          onDayPress={(day: any) => {
            setSelectedDate(day.dateString);
            // onChange?.(day.dateString ?? "");
            // setShowModal(false);
          }}
          markedDates={{
            [selectedDate ?? ""]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "flex-end",
            // width: "100%",
            gap: 10,
            padding: 5,
            backgroundColor: "white",
            // width:"100%",
            // just
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowModal(false)}
          >
            <ThemedText type="link">Cancel</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              onChange?.(selectedDate ?? "");
              setShowModal(false);
            }}
          >
            <ThemedText type="link">Submit</ThemedText>
          </TouchableOpacity>
        </View>
      </MModal>
    </>
  );
};

export default DatePicker;
