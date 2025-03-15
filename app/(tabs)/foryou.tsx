import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function LikedScreen() {
  return   <View>
      <Text>
        HomeScreen Only
      </Text>
    </View>
}

function SuggestedScreen() {
   return <View>
    <Text>
      ProfileScreen Only
    </Text>
  </View>
}
function LibraryScreen() {
  return <View>
   <Text>
     LibraryScreen Only
   </Text>
 </View>
}