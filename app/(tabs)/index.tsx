// https://ideogram.ai/assets/progressive-image/balanced/response/UL_6QboVRnOKm2o24N28_g
// https://ideogram.ai/assets/image/lossless/response/TtdkwgiJSQmyJra5XeN0ww
// https://ideogram.ai/assets/progressive-image/balanced/response/mbsPKwZATHKECmlcB3iobA
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Explore() {
  return (
    <SafeAreaView 
    style={{flex: 1}}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black ", light: "white" }}
        headerImage={
          <Image
            style={{ 
            flex : 1,
            }}
            source={{
              uri: "https://ideogram.ai/assets/image/lossless/response/TtdkwgiJSQmyJra5XeN0ww",
            }}
          />
        }
      >
    <View style={{ minHeight: 1000 , padding: 20 }}>
    <Text style={{ color: "white", fontSize: 24 }}>Explore Page</Text>
  </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
