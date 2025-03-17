import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
 <GestureHandlerRootView>
     <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(nobottombar)/accountinfo"
        options={{
          headerShown: true,
          headerTitle: "Account info",
          headerBackTitle: "Go Back",
        }}
      />
    </Stack>
 </GestureHandlerRootView>
  );
}
