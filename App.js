import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AnimScreen from './screens/AnimScreen';
import { View, Text, Image } from 'react-native'
 
class App extends Component{
  render(){
    return <AppContainer />
  }
}

export default App;



const TabsNavigation = createBottomTabNavigator(
  {
  Home: 
  {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Дом',
      tabBarIcon: ({ tintColor }) => (
        <Image
            style={{width: 20, height: 20, tintColor: '#fff'}}
            source={require('./assets/images/home.png')}
          />
       )
    }
  }, 
  Details: 
  {
    screen: DetailsScreen,
    navigationOptions: {
      tabBarLabel: 'Детали',
      tabBarIcon: ({ tintColor }) => (
        <Image
            style={{width: 20, height: 20, tintColor: '#fff'}}
            source={require('./assets/images/information.png')}
          />
       )
    }
  },
  Anim: 
  {
    screen: AnimScreen,
    navigationOptions: {
      tabBarLabel: 'Анимация',
      tabBarIcon: ({ tintColor }) => (
        <Image
            style={{width: 20, height: 20, tintColor: '#fff'}}
            source={require('./assets/images/anim.png')}
          />
       )
    }
  },
},{
  initialRouteName: 'Details',
  tabBarOptions: {
    activeBackgroundColor: '#1c5a99',
    labelStyle: {
      color: '#fff',
      fontSize: 14,
    },
    style: {
      backgroundColor: '#2e86de'
    },
  },
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return {
      headerTitle: routeName,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2e86de'
      }
    };
  }
},
);

const TabsStack = createStackNavigator({
  TabsNavigation: TabsNavigation,
});

const DrawerNavigation = createDrawerNavigator({
  Main: {screen: TabsStack},
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen},
  Anim: {screen: AnimScreen},
},{
  initialRouteName: 'Main',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#1c5a99',
  },
  style: {
    backgroundColor: '#2e86de'
  }
});

const SwitchNavigation = createSwitchNavigator({
  Home: {screen: DrawerNavigation},
});

const AppContainer = createAppContainer(SwitchNavigation);