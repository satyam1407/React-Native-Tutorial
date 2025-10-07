import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{title: "Home"}}/>
        <Stack.Screen name="about" options={{title: "About"}}/>
        <Stack.Screen name="products/index" options={{title: "Product"}}/>
        <Stack.Screen name="products/[id]" options={{title: "Product Info"}}/>
        <Stack.Screen name="+not-found" options={{title: "Missing"}}/>
        <Stack.Screen name="todoApp" options={{headerShown: false}}/>
      </Stack>
    </ThemeProvider>
  );
}
