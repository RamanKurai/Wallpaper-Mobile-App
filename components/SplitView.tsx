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
      <FlatList
        data={wallpapers
          .filter((_, index) => index % 2 === 0)
          .map((_, index) => [wallpapers[index], wallpapers[index + 1]])}
        renderItem={({ item: [first, second] }) => (
          <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(first);
                  }}
                  wallpaper={first}
                />
              </View>
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
              {second && (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={second}
                    onPress={() => {
                      setSelectedWallpaper(second);
                    }}
                  />
                </View>
              )}
            </ThemedView>
          </ThemedView>
        )}
        keyExtractor={(item) => item[0].name}
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
