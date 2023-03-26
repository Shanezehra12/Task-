import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View>
      <Text style = {styles.Text}> Search Screen </Text>
    </View>
  )
}

export default SearchScreen

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