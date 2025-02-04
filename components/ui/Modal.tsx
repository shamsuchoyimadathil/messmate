import { Entypo } from "@expo/vector-icons";
import React, { FC, ReactNode } from "react";
import {
  Modal,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const MModal: FC<{
  children: ReactNode;
  showModal: boolean;
  onHide: () => void;
  showTitle?: boolean;
  customTitle?: ReactNode;
  showFooter?: boolean;
  onSubmit?: () => void;
  footer?: {
    okText?: string;
    cancel?: string;
    wrapperStyle?: StyleProp<ViewStyle>;
  };
  styles?: {
    contentWrapper?: StyleProp<ViewStyle>;
  };
}> = ({
  children,
  onHide,
  showModal,
  showTitle = true,
  customTitle,
  showFooter = true,
  onSubmit,
  footer,
  styles,
}) => {
  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="fade"
      onRequestClose={onHide}
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
          style={[
            {
              padding: 10,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            },
            styles?.contentWrapper,
          ]}
        >
          {showTitle && (
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
          )}
          {children}
          {showFooter && (
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
                style={{ backgroundColor: "red", borderRadius: 8, padding: 10 }}
                onPress={onHide}
                activeOpacity={0.8}
              >
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#007bff",
                  borderRadius: 8,
                  padding: 10,
                }}
                onPress={onSubmit}
                activeOpacity={0.8}
              >
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default MModal;
