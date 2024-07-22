import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="(wallpaper)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
