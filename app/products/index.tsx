import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      <Link style={styles.text} href={"/products/1"}>Product 1</Link>
      <Link style={styles.text} href={"/products/2"}>Product 2</Link>
      <Link style={styles.text} href={"/products/3"}>Product 3</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // fontSize: 
    },
    text: {
        margin: 10
    }
})