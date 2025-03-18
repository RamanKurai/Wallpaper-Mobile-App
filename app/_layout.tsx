import { DowloadPicture } from '@/components/BottomSheet';
import { useWallpapers } from '@/hooks/useWallpapers';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
    const walletpapers = useWallpapers();
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown: false
        }} >
        </Stack>
    </GestureHandlerRootView>
}