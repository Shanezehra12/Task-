import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = props => {

    useEffect (() =>{
        setTimeout(() => {
            props.navigation.navigate('HomeNavigator')
        }, 4000);
    }, []);

  return (
    <View style = {{justifyContent: "center", alignItems: "center", flex: 1}}>

      <Image
      source={require('../assets/logo.png')}
      style = {{width: 150, height: 150, resizeMode: "contain"}}
      />

    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

})