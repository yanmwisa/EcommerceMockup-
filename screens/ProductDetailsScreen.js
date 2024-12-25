import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params; // Récupérer les détails du produit passé en paramètre

  const handleBuyNow = () => {
    alert(`You have purchased: ${product.name} for $${product.price}`);
  };

  return (
    <View style={styles.container}>
      {/* Mise à jour de l'image pour accepter les imports locaux */}
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productCategory}>Category: {product.category}</Text>
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
      <Text style={styles.productDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        vehicula velit sit amet velit vehicula, vitae efficitur lacus blandit.
        Maecenas tincidunt justo ut vehicula bibendum.
      </Text>
      <Button title="Buy Now" onPress={handleBuyNow} />
      <Button
        title="Back to Home"
        onPress={() => navigation.goBack()} // Retour à l'écran précédent
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
    alignItems: "center"
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "contain" // Assure une bonne adaptation de l'image
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center"
  },
  productCategory: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
    textAlign: "center"
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 10,
    textAlign: "center"
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24
  }
});

export default ProductDetailsScreen;
