import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/ProviderScreenStyle'

class ProviderScreen extends Component {
  constructor (props) {
    super(props)
    this.randomizeTopic = this.randomizeTopic.bind(this)
    this.state = { provider: {feedback: '', isRandomized: false }};
  }

  render () {
    const {navigate} = this.props.navigation;
    const randomizeButton = this.state.provider.isRandomized ? null : <RoundedButton onPress={this.randomizeTopic} text='Randomize Feedback Topic' />;
    const startOverButton = this.state.provider.isRandomized ? <RoundedButton onPress={() => navigate('PlayMain')} text='Play Again' /> : null;
    // const timeButtons = this.state.provider.isRandomized ? <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}><RoundedButton onPress={() => navigate('PlayMain')} text='5 mins' /><RoundedButton onPress={() => navigate('PlayMain')} text='6 mins' /><RoundedButton onPress={() => navigate('PlayMain')} text='7 mins' /></View> : null;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              Playing as the Provider
            </Text>
          </View>
          {randomizeButton}
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              { this.state.provider.feedback }
            </Text>
          </View>
          {startOverButton}
          
          {timeButtons}
          
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
    this.setState({ provider: {feedback: feedbacks[0] , isRandomized: true}});
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
