// https://ideogram.ai/assets/progressive-image/balanced/response/UL_6QboVRnOKm2o24N28_g
// https://ideogram.ai/assets/image/lossless/response/TtdkwgiJSQmyJra5XeN0ww
// https://ideogram.ai/assets/progressive-image/balanced/response/mbsPKwZATHKECmlcB3iobA
// https://ideogram.ai/assets/progressive-image/balanced/response/OhFc9ol_QEqloFNTnnWMKw
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { Wallpaper } from "@/hooks/useWallpapers";
import DowloadPicture from "@/components/BottomSheet";
import { SplitView } from "@/components/SplitView";
import Carousel from 'react-native-reanimated-carousel';
  

export default function explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get('window').width;
  const [yOffset, setScrollY] = useState(0);  
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={{flex: 1}}>
      <View style={{height : 300 - yOffset}}>
      <Carousel
        width={width}
        height={300 - yOffset}
        data={[...new Array(6).keys()]}
        onSnapToItem={(index ) => console.log('current index' , index )}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30  , height : 100}}>{index}</Text>
          </View>
        )}
      />
      </View>
           <SplitView
           onScroll={(yOffset) => {
            setScrollY(yOffset)
           }}
           wallpapers={wallpapers}/>
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
