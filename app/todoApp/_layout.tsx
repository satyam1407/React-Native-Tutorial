import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


export default function _layout() {
  return (
    <Tabs
        screenOptions={{
            headerTitle: "Todo App", 
            headerTitleAlign: "center", 
            headerStyle: {
                backgroundColor: "rgba(153, 130, 218, 1)",
            },
            tabBarActiveTintColor: "rgba(109, 107, 197, 1)",
            tabBarInactiveTintColor: "rgba(163, 163, 163, 1)",
            tabBarStyle: {
                backgroundColor: "#1e293b",
                paddingTop: 10,
                paddingBottom: 30,
                height: 90
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600"
            }
        }}
        
    >
        <Tabs.Screen 
            name='index' 
            options={{
                title: "Home",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" size={size} color={color}/>
                ),
            }}/>
        <Tabs.Screen 
            name='settings' 
            options={{
                title: "Settings",
                tabBarIcon: ({color, size})=>(
                    <Ionicons name="settings" size={size} color={color}/>
                )
            }}/>
    </Tabs>
  )
}
