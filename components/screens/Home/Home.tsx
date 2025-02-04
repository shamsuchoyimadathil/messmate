import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import MModal from "@/components/ui/Modal";

export const FoodTimes: FC<{
  onClick?: (val?: string[]) => void;
  values?: string[];
}> = ({ onClick, values }) => {
  const items = ["B", "L", "D"];
  return (
    <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      {items?.map((i) => (
        <TouchableOpacity
          key={i}
          style={{
            ...styleSheet.food,
            backgroundColor: values?.includes(i?.toLocaleLowerCase())
              ? "#5C7285"
              : "#ccc",
          }}
          onPress={() => {
            if (values?.includes(i?.toLocaleLowerCase())) {
              onClick?.(values?.filter((k) => k !== i?.toLocaleLowerCase()));
            } else {
              onClick?.([...(values ?? []), i?.toLocaleLowerCase()]);
            }
          }}
          activeOpacity={0.8}
        >
          <Text style={styleSheet?.foodText}>{i}</Text>
        </TouchableOpacity>
      ))}
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
          <FoodTimes onClick={() => setShowModal(true)} />
        </View>
      ))}

      <MModal showModal={showModal} onHide={() => setShowModal(false)}>
        <View>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Do you want to food tonighfffft ?.{" "}
          </Text>
        </View>
      </MModal>
    </React.Fragment>
  );
};

const Home: FC = () => {
  const [selected, setSelected] = useState("");
  return (
    <ParallaxScrollView>
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
    </ParallaxScrollView>
  );
};

export default Home;

const styleSheet = StyleSheet.create({
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
    // backgroundColor: "#5C7285",
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
