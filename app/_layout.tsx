import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
   <SafeAreaView>
     <View>
      <Link href={"/"}>
        <Text>Take me to the for you page</Text>
      </Link>

      <Link href={"/explore"}>
        <Text>Take me to the explore page</Text>
      </Link>

      <Link href={"/accounts"}>
        <Text>Take me to the accounts page</Text>
      </Link>
    </View>
    <Slot/>
   </SafeAreaView>
  );
}
