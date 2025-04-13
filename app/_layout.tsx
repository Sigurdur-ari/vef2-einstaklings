import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import UserHeader from "../components/UserHeader"

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false 
          }} 
        />
        
        <Stack.Screen 
          name="deck/[id]" 
          options={{ 
            title: "Deck", 
            headerTitle: '',
            headerBackTitle: 'Back to decks',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#6DC7D1', 
            },
            headerTintColor: '#000',
            headerRight: () => <UserHeader />,
          }} 
        />

        <Stack.Screen 
          name="+not-found" 
          options={{ 
            title: "Not Found", 
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#6DC7D1', 
            },
            headerTintColor: '#000',
          }}
        />
        
        <Stack.Screen 
          name="login"
          options={{ 
            title: "Login", 
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#6DC7D1', 
            },
            headerTintColor: '#000',
          }}  
        />
      </Stack>
      <StatusBar style="dark" />
    </AuthProvider>
  );
}
