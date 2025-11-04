import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> 
      <Stack.Screen name="onboarding/index" />
      <Stack.Screen name="details/index" />
      <Stack.Screen
        name="details/[id]"
        options={{ title: "Product details", headerShown: false }}
      />
    </Stack>
  );
}
