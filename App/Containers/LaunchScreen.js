import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button } from 'react-native';
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={{height: 50}}></View>
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              WELCOME
            </Text>
          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              You have arrived.
            </Text>
          </View>
          <RoundedButton
              onPress={() => navigate('Instructions')}
              text="Let's Play"
            />
        </ScrollView>
      </View>
    )
  }
}
