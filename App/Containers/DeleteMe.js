import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={{height: 50}}></View>
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              Instructions
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              How to play
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Your facilitator will help walk you through the game play. Here are the basics:
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Group Up - Break up into groups of 2, 3, or 4 people.
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Before each round choose 
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
