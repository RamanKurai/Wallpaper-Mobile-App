import { SplitView } from '@/components/SplitView';
import { ThemedView } from '@/components/ThemedView';
import { useLibraryWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function LikedScreen() {
  const wallpapers = useLibraryWallpapers()
  return   <ThemedView style={styles.container}>
     <SplitView wallpapers={wallpapers} />
    </ThemedView>
}

function SuggestedScreen() {
  const wallpapers = useSuggestedWallpapers()
  return   <ThemedView style={styles.container}>
     <SplitView wallpapers={wallpapers} />
    </ThemedView>
}
function LibraryScreen() {
  const wallpapers = useLibraryWallpapers()
  return   <ThemedView style={styles.container}>
     <SplitView wallpapers={wallpapers} />
    </ThemedView>
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})