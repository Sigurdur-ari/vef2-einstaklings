import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="deck/[id]" 
      options={{ 
        title: "Deck", 
        headerTitle: '',
        headerBackTitle: 'Back to decks',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#6DC7D1', 
        },
        headerTintColor: '#000',
        }} />
      <Stack.Screen name="+not-found" />
    </Stack>
    <StatusBar style="dark" />
  </>
  );
}