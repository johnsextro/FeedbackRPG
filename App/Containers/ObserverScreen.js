import React, { Component } from 'react'
import { ScrollView, Text, View, Image, Alert, Button } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/FeedbackStyle'

class ProviderScreen extends Component {
  constructor (props) {
    super(props)
    this.randomizeTopic = this.randomizeTopic.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.continueTimer = this.continueTimer.bind(this)
    this.finishRound = this.finishRound.bind(this)
    this.handleTimerExpiration = this.handleTimerExpiration.bind(this)
    this.state = { provider: {feedback: '', state: 'phase1'}};
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerStyle: {backgroundColor: '#4f354d'},
    headerRight: <Button title="Home" onPress={() => { navigation.navigate('Instructions') }} />,
  });

  render () {
    const {navigate} = this.props.navigation;
    const playAgain = <RoundedButton onPress={() => navigate('PlayMain')} text='Play Again' />;

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              Playing as the Observer
            </Text>
          </View>
          {playAgain}
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              While you're observing…
            </Text>
            <Text style={styles.titleText}>
              * Imagine what you would say and do if you were providing the feedback. 
            </Text>
            <Text style={styles.titleText}>
              * What could the 'Provider' do differently to handle the Persona they're facing?
            </Text>
            <Text style={styles.titleText}>
              * Did the 'Provider' make effective use of the feedback workflow?
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Feedback Workflow
            </Text>
            <Text style={styles.titleText}>
              1. Clearly explain the issue and supporting facts.
            </Text>
            <Text style={styles.titleText}>              
              2. Listen to understand and find out what is true. Be prepared to defend your facts while at the same time being open to having those facts corrected.
            </Text>
            <Text style={styles.titleText}>
              3. Take a break.
            </Text>
            <Text style={styles.titleText}>
              4. Help the 'Responder' decide what to do with this feedback. 
            </Text>              
            <Text style={styles.titleText}>
              5. Agree on next steps. In the event that you are unable to arrive at a mutually agreeable resolution, inform the 'Responder' of the need to escalate for resolution.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }

  randomizeTopic() {
    var feedbacks = ['Co-worker has strong body order and poor personal hygiene.', 
                    'Co-worker has performance issues that border on requiring a CFA and is showing no signs of improvement following previous coaching sessions.', 
                    'Co-worker regularly spends time discussing topics and subjects that are not work appropriate.',
                    'Co-worker consistently fails to meet reasonable commitments.',
                    'Co-worker often sits back on phone in meetings and pairing sessions.',
                    'Co-worker takes frequent breaks and always finds a way to avoid working/pairing.',
                    'Co-worker is spreading time across 2, maybe 3 projects and is not delivering on commitments for your project.',
                    'Co-worker inappropriately makes changes without consultation, disregarding the quality delivery process.',
                    'Co-worker refuses to work outside of the strict letter of their role responsibilities and often ends up with large periods of downtime.',
                    'Co-worker decides not to engage in retros and turnarounds, but is always the first one to complain or say, “I told you so” when problems occur.',
                    'Co-worker frequently puts in 50+ hours a week and is always the first to volunteer to take on additional work, leaving the team feeling undervalued and out of the loop.'];
    for (var i = feedbacks.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = feedbacks[i];
      feedbacks[i] = feedbacks[j];
      feedbacks[j] = temp;
    }
    this.setState({ provider: {feedback: feedbacks[0] , state: 'phase2'}});
  }

  startTimer() {
    this.setState({ provider: {feedback: this.state.provider.feedback, state: 'phase3'}});
  }

  continueTimer() {
    this.setState({ provider: {feedback: this.state.provider.feedback, state: 'phase4'}});
  }

  finishRound() {
    this.setState({ provider: {feedback: this.state.provider.feedback, state: 'phase5'}});
  }

  handleTimerExpiration() {
    if (this.state.provider.state == 'phase4') {
      Alert.alert(
        'Times Up',
        'End your round. Then spend a few minutes debriefing with your group.', [{text: 'OK', onPress: this.finishRound}],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Break Time',
        'Simulate Taking a Break', [{text: 'OK', onPress: this.continueTimer}],
        {cancelable: false},
      );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProviderScreen)
