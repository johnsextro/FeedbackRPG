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
        </ScrollView>
      </View>
    )
  }

  randomizeTopic() {
    var feedbacks = ['Co-worker has strong body order and poor personal hygiene.', 
                    'Co-worker has performance issues that border on requiring a CFA and is showing no signs of improvement following previous coaching sessions.'];
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
