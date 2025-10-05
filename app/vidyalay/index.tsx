import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectRoleCard from './selectRoleCard'

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22, marginBottom: 5, fontWeight: "700"}}>Select Role</Text>
      <Text style={{fontSize: 15, marginBottom: 5}}>Choose your role to continue with login</Text>
      <SelectRoleCard 
        logoText='SD'
        mainText='Student'
        sideText='Access your courses and assignments'
      />
      <SelectRoleCard 
        logoText='PR'
        mainText='Parent'
        sideText='Monitor your child progress                        '
      />
      <SelectRoleCard 
        logoText='TR'
        mainText='Teacher'
        sideText='Manage classes and students                        '
      />
      <SelectRoleCard 
        logoText='ST'
        mainText='Staff'
        sideText='Administrative access                              '
      />
      {/* <SelectRoleCard /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        marginTop: 20,
        alignItems: "center"
    }
})