import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      </View>
  )
}

export default FilterScreen

const styles = StyleSheet.create({

  Text: {
    color: "black", 
    justifyContent: "center", 
    alignSelf: "center",
    fontSize: 20,
    margin: 20,
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})