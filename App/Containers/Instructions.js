import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/InstructionsStyle'

class Instructions extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
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
            <RoundedButton
              text='Start'
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions)
