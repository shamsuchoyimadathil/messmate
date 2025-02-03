import React, { FC, useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { IconSymbol } from "@/components/ui/IconSymbol";
// import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from "@expo/vector-icons/Entypo";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import MModal from "@/components/ui/Modal";

export const FoodTimes: FC<{ onClick?: (time?: string) => void }> = ({
  onClick,
}) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <TouchableOpacity
        style={styleSheet.food}
        onPress={() => {
          onClick?.("b");
        }}
        activeOpacity={0.8}
      >
        <Text style={styleSheet?.foodText}>B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styleSheet.food, backgroundColor: "#ccc" }}
        onPress={() => {
          onClick?.("l");
        }}
        activeOpacity={0.8}
      >
        <Text style={styleSheet?.foodText}>L</Text>
      </TouchableOpacity>
    </View>
  );
};

const ScheduleItem: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      {[...Array(3)]?.map((i, n) => (
        <View key={n} style={styleSheet?.item}>
          <Text style={styleSheet?.days}>Monday</Text>
          <FoodTimes onClick={()=> setShowModal(true)}/>
        </View>
      ))}

      <MModal showModal={showModal} onHide={() => setShowModal(false)}>
        <View>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Do you want to food tonighfffft ?.{" "}
          </Text>
        </View>
      </MModal>
      {/* 
      <Modal
        // visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 25,
          }}
        >
          <View
            style={{
              padding: 10,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Entypo name="warning" size={56} color="#FFCC00" />

              <Text
                style={{ textAlign: "center", fontSize: 24, fontWeight: "600" }}
              >
                Are you sure ?.{" "}
              </Text>
            </View>
            <View>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Do you want to food tonight ?.{" "}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                style={styleSheet.cancelButton}
                onPress={() => {
                  setShowModal(false);
                }}
                activeOpacity={0.8}
              >
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styleSheet.confirmButton}
                onPress={() => {
                  setShowModal(true);
                }}
                activeOpacity={0.8}
              >
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
    </React.Fragment>
  );
};

const Home: FC = () => {
  const [selected, setSelected] = useState("");
  return (
    <ParallaxScrollView>
      {/* <View style={styleSheet?.wrapper}> */}
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
      {/* </View> */}
    </ParallaxScrollView>
  );
};

export default Home;

const styleSheet = StyleSheet.create({
  //   wrapper: {
  //     padding: 40,
  //     paddingTop: 50,
  //     flex: 1,
  //     alignItems: "center",
  //     gap: 10,
  //   },
  item: {
    width: "100%",
    padding: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },

  days: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 10,
  },
  food: {
    width: 40,
    height: 40,
    borderColor: "black",
    backgroundColor: "#5C7285",
    borderRadius: "50%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  foodText: {
    color: "white",
    fontWeight: "500",
  },
  confirmButton: {
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: 8,
    fontWeight: "600",
    padding: 10,
  },
  cancelButton: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 8,
    fontWeight: "600",
    padding: 10,
  },
});
