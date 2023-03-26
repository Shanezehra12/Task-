import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View>
      <Text style = {styles.Text}> User Screen </Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  Text: {
    color: "black", 
    justifyContent: "center", 
    alignSelf: "center",
    fontSize: 20,
    margin: 20,
    fontWeight: "bold"
  }
})