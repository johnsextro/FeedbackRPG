import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProviderScreen from '../Containers/ProviderScreen'
import ResponderScreen from '../Containers/ResponderScreen'
import PlayMain from '../Containers/PlayMain'
import Instructions from '../Containers/Instructions'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ProviderScreen: { screen: ProviderScreen },
  ResponderScreen: { screen: ResponderScreen },
  PlayMain: { screen: PlayMain },
  Instructions: { screen: Instructions },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
