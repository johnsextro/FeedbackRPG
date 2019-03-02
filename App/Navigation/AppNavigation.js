import { createStackNavigator, createAppContainer } from 'react-navigation'
import PlayMain from '../Containers/PlayMain'
import Instructions from '../Containers/Instructions'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
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
