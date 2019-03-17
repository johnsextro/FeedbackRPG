import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/FeedbackStyle'

class Instructions extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerStyle: {backgroundColor: '#4f354d'}
  });

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <RoundedButton
            onPress={() => navigate('PlayMain')}
            text='Start'
          />
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              How To Play
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Split Up Into Groups
            </Text>
            <Text style={styles.titleText}>
              All of your groups should be the same size. Limit the size of each group to 2, 3, or 4 people.
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Before Each Round
            </Text>
            <Text style={styles.titleText}>
              Choose a person in your group to be the "Provider of the Feedback". Next, choose a person in your group to be the "Responder to the Feedback". The others in your group will be the "Observers". After each round the roles will rotate so that everyone has a chance to perform all of the roles.
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Playing a Round
            </Text>
            <Text style={styles.titleText}>
              Rounds are timed and consist of 2 parts, separated by a "simulated break".
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              After Each Round
            </Text>
            <Text style={styles.titleText}>
              Spend a couple of minutes debriefing with your group. What went well? What could have gone better? What surprised you?
            </Text>
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
