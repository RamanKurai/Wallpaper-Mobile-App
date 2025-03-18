import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export function ThemedSafeAreaView({ children, style = {} }: { 
    children: React.ReactNode; 
    style?: any; 
}) {
    const theme = useColorScheme() ?? "light";

    return (
        <SafeAreaView style={{ backgroundColor: Colors[theme].background, flex: 1, ...style }}>
            <StatusBar 
                barStyle={theme === "dark" ? "light-content" : "dark-content"}
                backgroundColor={Colors[theme].background} 
            />
            {children}
        </SafeAreaView>
    );
}
