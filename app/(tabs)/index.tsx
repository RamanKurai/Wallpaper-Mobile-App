// https://ideogram.ai/assets/progressive-image/balanced/response/UL_6QboVRnOKm2o24N28_g
// https://ideogram.ai/assets/image/lossless/response/TtdkwgiJSQmyJra5XeN0ww
// https://ideogram.ai/assets/progressive-image/balanced/response/mbsPKwZATHKECmlcB3iobA
// https://ideogram.ai/assets/progressive-image/balanced/response/OhFc9ol_QEqloFNTnnWMKw
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { Wallpaper } from "@/hooks/useWallpapers";
import DowloadPicture from "@/components/BottomSheet";

export default function explore() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper , setSelectedWallpaper] = useState<null | Wallpaper>()

  return (
    <GestureHandlerRootView>
    <SafeAreaView 
    style={{flex: 1}}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black ", light: "white" }}
        headerImage={
          <Image style={{flex : 1,}} source={{uri: wallpapers[0]?.url ?? "" }} />}>
            <ThemedView style={styles.container}>
              <ThemedView style={styles.innerContainer}>
               <FlatList
                 data={wallpapers.filter((_, index) => index % 2 === 0)}
                 renderItem={({item}) => <View style={styles.imageContainer}>
                  <ImageCard 
                  onPress={() => {
                      setSelectedWallpaper(item)
                  }} wallpaper={item}/>
                 </View>}
                 keyExtractor={item => item.name}
               />
              </ThemedView>
              <ThemedView style={styles.innerContainer}>
              <FlatList
                 data={wallpapers.filter((_, index)=> index % 2 === 1)}
                 renderItem={({item}) => <View style={styles.imageContainer}>
                  <ImageCard 
                  onPress={() => {
                    setSelectedWallpaper(item)
                  }} wallpaper={item}/>
                 </View>}
                 keyExtractor={item => item.name}
               />
              </ThemedView>
            </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && <DowloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      flex: 1
  },
  innerContainer: {
      flex: 1,
      padding: 10
  },
  imageContainer: {
      paddingVertical: 10
  }
})
