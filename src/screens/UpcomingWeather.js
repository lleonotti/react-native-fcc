import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

function UpcomingWeather() {
  const DATA = [
    {
      dt_txt: '2022-08-30 16:00:00',
      main: {
        temp_min: 6.34,
        temp_max: 8.24
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: '2022-10-30 15:00:00',
      main: {
        temp_min: 6.34,
        temp_max: 8.24
      },
      weather: [
        {
          main: 'Clouds'
        }
      ]
    },
    {
      dt_txt: '2022-11-01 18:00:00',
      main: {
        temp_min: 8.55,
        temp_max: 5.55
      },
      weather: [
        {
          main: 'Rain'
        }
      ]
    }
  ]

  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <Text>UpcomingWeather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalBlue'
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather
