import React from "react";
import { View, Text, Button } from "react-native";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Category Screen</Text>
      <Button
        title="Go to Product Details"
        onPress={() => navigation.navigate("ProductDetails")}
      />
    </View>
  );
};

export default CategoryScreen;