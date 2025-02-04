import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const route = useRoute(); 
  // console.log({route})
  // const currentScreenTitle = route.path;
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
          // options={{
          //   // header: (v) => {
          //   //   console.log({ v });
          //   //   return <View>test</View>;
          //   // },
            
          // }}
          options={{
            header: () => (
              <View style={{ padding: 20, paddingTop:40, backgroundColor: '#5C7285' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  {/* {currentScreenTitle} */}
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
