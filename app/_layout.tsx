import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { FC, useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { usePathname } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const Header: FC = () => {
  
  const headerTitle: any = {
    "/": "Home",
    "/calendar": "Calendar",
  };

  const pathName = usePathname();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: "#5C7285",
      }}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        {headerTitle[pathName]}
      </Text>
    </View>
  );
};
