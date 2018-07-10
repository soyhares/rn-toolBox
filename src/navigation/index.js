import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
	createStackNavigator,
	createSwitchNavigator,
	createDrawerNavigator,
	createBottomTabNavigator,

} from 'react-navigation';
import * as screen from '../views';

// const authStack = createStackNavigator(
// 	{
// 		signIn: screen.SignIn,
// 		signUp: screen.SignUp,
// 		recover: screen.RecoverPassword,
// 	},
// 	{
// 		initialRouteName: 'signIn',
// 		headerMode: 'none'
// 	}
// );

const toolsStack = createStackNavigator(
	{	
		about: screen.About,
		socialNetwork: screen.SocialNetwork
	},
	{
		initialRouteName: 'about',
	}
);

 const TabsMaterial = createMaterialBottomTabNavigator({
  About: { screen: screen.About },
  SocialNetwork: { screen: screen.SocialNetwork },

}, {
  initialRouteName: 'About',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
});

const Animations = createBottomTabNavigator(
  {
    Cards: screen.SwipeCards,
    Ball: screen.Ball,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Cards') {
          iconName = `ios-albums${focused ? '' : '-outline'}`;
        } else if (routeName === 'Ball') {
          iconName = `ios-baseball${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#006292',
      inactiveTintColor: 'gray',
    },
  }
);

const mainStack = createDrawerNavigator({
  home: {
    screen: screen.Home,
  },
  about: {
    screen: screen.About,
  },
  ['social network']: {
    screen: screen.SocialNetwork,
  },
  cards: screen.SwipeCards,
  ball: screen.Ball,
  // Animations: Animations,
});




const introStack = createStackNavigator(
	{
		splash: screen.Splash,
	},
	{
		initialRouteName: 'splash',
		headerMode: 'none'
	}
);

const RootStack = createSwitchNavigator(
	{
		introStack,
		mainStack
	},
	{
		initialRouteName: 'introStack'
	}
);

export default RootStack;
