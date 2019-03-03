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
    this.state = { persona: ''};
  }

  randomizePersona() {
    var personas = ['Bard', 'Paladin', 'Mage', 'Rogue', 'Wizard', 'Monk']
    for (var i = personas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = personas[i];
      personas[i] = personas[j];
      personas[j] = temp;
    }
    this.setState({ persona: personas[0] });
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.welcome} >
            <Text style={styles.sectionText}>
              Playing as the Responder
            </Text>
          </View>
          <RoundedButton
              onPress={this.randomizePersona}
              text='Randomize My Persona'
            />
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              { this.state.persona }
            </Text>
          </View>
          <View style={styles.instruction} >
            <Text style={styles.titleText}>
              Instructions for playing as this persona.
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponderScreen)
