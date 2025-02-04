import DatePicker from "@/components/ui/DatePicker";
import MModal from "@/components/ui/Modal";
import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { FoodTimes } from "./Home";

const CalendarScreen: FC = () => {
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [modalValues, setModalValues] = useState<{
    dateFrom?: string;
    dateTo?: string;
    fromFood?: string[];
    toFood?: string[];
    currentDateFood?: string[];
  }>({});
  return (
    <View style={styles?.calendarWrapper}>
      <Calendar
        onDayPress={(day: any) => {
          setShowModal(true);
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

      <MModal
        showTitle={false}
        showModal={showModal}
        onHide={() => setShowModal(false)}
      >
        <Text>Select {selected} Food Schedule.</Text>
        <FoodTimes
          onClick={(val) => {
            setModalValues((prv) => ({ ...prv, currentDateFood: val }));
          }}
          values={modalValues?.currentDateFood}
        />

        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderTopWidth: 0,
              borderWidth: 1,
              borderColor: "#ccc",
              width: "40%",
              height: 0,
              marginRight: 10,
            }}
          ></View>
          <Text>Or</Text>
          <View
            style={{
              borderTopWidth: 0,
              borderWidth: 1,
              borderColor: "#ccc",
              width: "40%",
              height: 0,
              marginLeft: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <View>
            <DatePicker
              value={modalValues?.dateFrom}
              onChange={(val) =>
                setModalValues((prv) => ({ ...prv, dateFrom: val }))
              }
              placeholder="From Date"
            />
          </View>
          <View>
            <FoodTimes
              onClick={(val) => {
                setModalValues((prv) => ({ ...prv, fromFood: val }));
              }}
              values={modalValues?.fromFood}
            />
          </View>
          <View>
            <DatePicker
              value={modalValues?.dateTo}
              onChange={(val) =>
                setModalValues((prv) => ({ ...prv, dateTo: val }))
              }
              placeholder="To Date"
            />
          </View>
          <View>
            <FoodTimes
              onClick={(val) => {
                setModalValues((prv) => ({ ...prv, toFood: val }));
              }}
              values={modalValues?.toFood}
            />
          </View>
        </View>
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
