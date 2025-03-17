import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { ImageCard } from "./ImageCard";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import DowloadPicture from "./BottomSheet";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  return (
    <>
    <ThemedView style={styles.container}>
      <ThemedView style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 === 0)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageCard
                onPress={() => {
                  setSelectedWallpaper(item);
                }}
                wallpaper={item}
              />
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </ThemedView>
      <ThemedView style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 === 1)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageCard
                onPress={() => {
                  setSelectedWallpaper(item);
                }}
                wallpaper={item}
              />
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </ThemedView>
      {selectedWallpaper && (
        <DowloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </ThemedView>
    </>
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
