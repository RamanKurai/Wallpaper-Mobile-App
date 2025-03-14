import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return   <View>
      <Text>
        HomeScreen Only
      </Text>
    </View>
}

function ProfileScreen() {
   return <View>
    <Text>
      ProfileScreen Only
    </Text>
  </View>
}