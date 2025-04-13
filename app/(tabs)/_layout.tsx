import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#E2F3F4',
        headerStyle: {
          backgroundColor: '#6DC7D1',
        },
        headerShadowVisible: false,
        headerTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#6DC7D1',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="kanji"
        options={{
          title: 'Kanji',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'language-sharp' : 'language-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="vocab"
        options={{
          title: 'Vocabulary',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
