import React, { FC, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import MModal from "./Modal";
import { Calendar } from "react-native-calendars";
import { ThemedText } from "../ThemedText";

const DatePicker: FC<{
  onChange?: (v?: string) => void;
  value?: string;
  placeholder?: string;
  onCancel?: () => void;
}> = ({ onChange, value, placeholder }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<null | string>("");
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
        }}
      >
        <Text style={{ color: "#ccc" }}>{selectedDate ?? "Selecte Date"}</Text>
      </TouchableOpacity>
      <MModal
        showModal={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        showFooter={false}
        showTitle={false}
      >
        <Calendar
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "gray",
          }}
          onDayPress={(day: any) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate ?? '']: {
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
            justifyContent: "flex-end",
            width: "100%",
            gap: 10,
            padding: 10,
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
              onChange?.(selectedDate ?? '');
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
