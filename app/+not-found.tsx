import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function CustomNotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
      <Link href={'/'} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    button: {
        backgroundColor: '#007bff', // Example background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
    },
    buttonText: {
        color: 'white', // Example text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        margin: 10
    }
})