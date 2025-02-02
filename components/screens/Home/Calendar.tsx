import MModal from "@/components/ui/Modal";
import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

const CalendarScreen: FC = () => {
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles?.calendarWrapper}>
      <Calendar
        onDayPress={(day: any) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />

      <MModal showModal={showModal} onHide={() => setShowModal(false)}>
        <Text> !!</Text>
      </MModal>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendarWrapper: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
});
