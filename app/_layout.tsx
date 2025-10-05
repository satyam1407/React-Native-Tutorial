import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Home"}}/>
    <Stack.Screen name="about" options={{title: "About"}}/>
    <Stack.Screen name="products/index" options={{title: "Product"}}/>
    <Stack.Screen name="products/[id]" options={{title: "Product Info"}}/>
    <Stack.Screen name="+not-found" options={{title: "Missing"}}/>
  </Stack>;
}
