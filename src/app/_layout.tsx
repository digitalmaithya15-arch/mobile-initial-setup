import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { LoginScreen } from '@/features/auth/screens/LoginScreen';
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { useAuth } from '@/features/auth/hooks/useAuth';
import AppTabs from '@/components/app-tabs';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const auth = useAuth();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  return (
    <NavigationContainer onReady={() => setIsNavigationReady(true)}>
      {auth.isLoggedIn && isNavigationReady ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <RootNavigator />
    </ThemeProvider>
  );
}
