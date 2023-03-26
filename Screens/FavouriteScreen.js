import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Swiper
        autoplay={true}
        dot={
          <View
            style={{
              backgroundColor: 'yellow',
              width: 30,
              height: 3,
              marginLeft: 7,
              marginRight: 7,
              marginVertical: 510,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: 'red',
              width: 30,
              height: 3,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        paginationStyle={{
          bottom: 70,
        }}
        loop={false}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/Model3.jpeg')}
            resizeMode="cover"
          />
          <Text style={styles.Text}>
            The 2023 Tesla Model 3 is a small all-electric sedan that's
            available in three trim levels: base, Long Range and Performance.
            The trio varies by range and acceleration. Take note that Tesla
            offers rolling updates to its cars rather than by model year, so
            features and range may differ from what's shown below.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/ModelS.jpeg')}
            resizeMode="cover"
          />
          <Text style={styles.Text}>
            Model S is built from the ground up as an electric vehicle, with a
            high-strength architecture and floor-mounted battery pack for
            incredible occupant protection and low rollover risk. Every new
            Model S includes Tesla's latest active safety features, such as
            Automatic Emergency Braking, at no extra cost.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/ModelX.jpeg')}
            resizeMode="cover"
          />
          <Text style={styles.Text}>
            Model X is a large electric midsize SUV that can make moves even
            while toting up to seven passengers. It's firmly in the luxury
            category based on price, but its optional third row and ample cargo
            room make it family-focused.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/ModelY.jpeg')}
          />
          <Text style={styles.Text}>
            The Tesla Model Y is a battery electric compact crossover
            manufactured by Tesla, Inc. Unveiled in March 2019, it started
            production at its Fremont plant in January 2020, and started
            deliveries on March 13, 2020. Tesla, Inc. The Model Y is based on
            the Model 3 sedan platform.
          </Text>
        </View>
      </Swiper>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  Text: {
    position: 'absolute',
    zIndex: 999,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
    backgroundColor: '#00000025',
    marginHorizontal: 10,
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  image: {
    width,
    height,
  },

  wrapper: {
    // backgroundColor: '#f00'
  },
});
