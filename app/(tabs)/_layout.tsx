import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'black',
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="appointments"
        options={{
          headerShown: false,
          title: 'Appointments',
          tabBarIcon: ({ color }) => <FontAwesome name="calendar" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="results"
        options={{
          title: 'Results',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" size={24} color={color} />
        }}
      />
    </Tabs>
  )
}