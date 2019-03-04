import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/ResponderScreenStyle'

class ResponderScreen extends Component {
  constructor (props) {
    super(props)
    this.randomizePersona = this.randomizePersona.bind(this)
    this.state = { responder: {persona: [{role: '', motivation: ''}], isRandomized: false }};
  }

  render () {
    const {navigate} = this.props.navigation;
    const randomizeButton = this.state.responder.isRandomized ? null : <RoundedButton onPress={this.randomizePersona} text='Randomize My Persona' />;
    const startOverButton = this.state.responder.isRandomized ? <RoundedButton onPress={() => navigate('PlayMain')} text='Play Again' /> : null;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              Playing as the Responder
            </Text>
          </View>
          {randomizeButton}
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              { this.state.responder.persona.role }
            </Text>
            <Text style={styles.titleText}>
              { this.state.responder.persona.motivation }
            </Text>
          </View>
          {startOverButton}
        </ScrollView>
      </View>
    )
  }

  randomizePersona() {
    var personas = [{role: 'Bard', 
                    motivation: 'You use long drawn out explanations and answers in an effort to dominate the conversation. You weave tales from past projects (battles) to distract away from the core topic. Your goal is to run out the clock to avoid ever hearing real feedback.'},
                    {role: 'Paladin',
                    motivation: 'You are the master of deflection, but you would never throw a co-worker under the bus. You always find a way to avoid accepting personal responsibility by down playing the impact of the issue or pointing out the silver lining. Your goal is to gain agreement that things are fine as-is.'}, 
                    {role: 'Berserker',
                    motivation: 'You are angry and extremely disagreeable when offered feedback and coaching. You will never agree with any facts presented to you. Your behavior is very close to the border line of what would commonly be considered work inappropriate, regularly straying into unprofessional. Your goal is to frighten away coaching.'}, 
                    {role: 'Rogue',
                    motivation: 'You use slight of hand and misdirection to slither out of every tough situation. You always have pocket sand ready to throw in someone’s eyes. You will never accept personal responsibility for anything that isn’t successful. Your goal is to avoid agreeing with anything you hear.'}, 
                    {role: 'Wizard',
                    motivation: 'You are wise, maybe a little too wise. You know and are willing to accept responsibility or at least what on the surface looks like responsibility. You try to jump ahead and show how much you’ve already improved. Your goal is to quickly gain agreement that things are already better by demonstrating how smart you are and how much you’ve “already improved”.'},
                    {role: 'Monk',
                    motivation: 'You have attained a level of enlightenment. You want to actively work to find the truth in what you are hearing. You easily accept personal responsibility for your actions. Feedback is as valuable to you as the rarest gem. Your goal is to improve and find a way to demonstrate and measure your improvement over time.'}
                  ]
    for (var i = personas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = personas[i];
      personas[i] = personas[j];
      personas[j] = temp;
    }
    this.setState({ responder: {persona: personas[0] , isRandomized: true}});
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponderScreen)
