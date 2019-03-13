import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProviderScreen from '../Containers/ProviderScreen'
import ResponderScreen from '../Containers/ResponderScreen'
import ObserverScreen from '../Containers/ObserverScreen'
import PlayMain from '../Containers/PlayMain'
import Instructions from '../Containers/Instructions'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ProviderScreen: { screen: ProviderScreen },
  ResponderScreen: { screen: ResponderScreen },
  ObserverScreen: { screen: ObserverScreen },
  PlayMain: { screen: PlayMain },
  Instructions: { screen: Instructions },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'Instructions',
  navigationOptions: {
    headerStyle: {backgroundColor: '#3b5998'}
  }
})

export default createAppContainer(PrimaryNav)
