import { Colors } from "@/constants/Colors";
import { useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ThemedSafeAreaView({ children, style = {} }: { 
    children: React.ReactNode; 
    style?: any; 
}) {
    const theme = useColorScheme() ?? "light";

    return (
        <View style={{ flex: 1, backgroundColor: Colors[theme].background }}>
            <SafeAreaView style={[{ flex: 1 }, style]}>
                <View style={{ flex: 1 }}>{children}</View>
            </SafeAreaView>
        </View>
    );
}
