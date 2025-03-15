import { View, Text, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import DowloadPicture from "@/components/BottomSheet";

const Account = () => {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Accounts Page</Text>
      <Button
        title="Open the bottom sheet"
        onPress={() => {
          setPictureOpen(true);
        }}
      ></Button>
      {pictureOpen && 
        <DowloadPicture onClose={() => setPictureOpen(false)} />
      }
    </SafeAreaView>
  );
};

export default Account;
