import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SelectRoleCardProps {
  logoText: string;
  mainText: string;
  sideText: string;
}

export default function SelectRoleCard({ logoText, mainText, sideText }: SelectRoleCardProps) {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.logoText}>{logoText}</Text>
      </View>

      <View style={styles.text}>
        <Text style={styles.maintext}>{mainText}</Text>
        <Text style={styles.sideText}>{sideText}</Text>
      </View>

      <View>
        <Text> -- </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 100, // Fixed height
        width: 420,  // Fixed width
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff", 
        margin: 10,
        overflow: "hidden", // Prevents content from overflowing
    },
    logo: {
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "blue",
        // marginRight: 20,
    },
    logoText: {
        color: "white",
        fontWeight: "800",
        fontSize: 20,
    },
    maintext: {
        fontWeight: "500",
        fontSize: 21
    },
    sideText: {
        color: "gray"
    },
    text: {
      marginRight: 10,
    }
})
