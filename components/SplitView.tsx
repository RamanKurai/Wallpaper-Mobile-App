import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { ImageCard } from "./ImageCard";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import DowloadPicture from "./BottomSheet";

export function SplitView({
  wallpapers,
  onScroll,
}: {
  wallpapers: Wallpaper[];
  onScroll?: (yOffset: number) => void;
}) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  return (
    <>
      <FlatList
        onScroll={(e) => {
          let yOffset = e.nativeEvent.contentOffset.y;
          onScroll?.(yOffset);
        }}
        data={Array.from(
          { length: Math.ceil(wallpapers.length / 2) },
          (_, index) => [
            wallpapers[index * 2],
            wallpapers[index * 2 + 1] ?? null,
          ]
        )}
        renderItem={({ item: [first, second], index }) => (
          <ThemedView style={styles.container} key={`row-${index}`}>
            <ThemedView style={styles.innerContainer}>
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => setSelectedWallpaper(first)}
                  wallpaper={first}
                />
              </View>
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
              {second && (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={second}
                    onPress={() => setSelectedWallpaper(second)}
                  />
                </View>
              )}
            </ThemedView>
          </ThemedView>
        )}
        keyExtractor={(_, index) => `wallpaper-${index}`}
      />
      {selectedWallpaper && (
        <DowloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
