import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
<<<<<<< HEAD
import { SafeAreaProvider } from 'react-native-safe-area-context';
=======
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
>>>>>>> 622080e687d35d16b6a165d54240dd7db9341683

export default function RootLayout() {
  return (
    <SafeAreaProvider>
<<<<<<< HEAD
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="(wallpaper)" options={{ headerShown: false }} />
=======
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
>>>>>>> 622080e687d35d16b6a165d54240dd7db9341683
      </Stack>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
