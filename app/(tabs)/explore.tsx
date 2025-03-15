import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Explore() {
  return (
    <View>
      <Text>Explore page</Text>
      <Link href="/(nobottombar)/accountinfo">AccountInfo</Link>
    </View>
  );
}
