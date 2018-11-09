import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import JobScreen from '../components/JobScreen';
import WishListScreen from '../components/WishListScreen';
import ProfileScreen from '../components/ProfileScreen';


const JobStack = createStackNavigator({
  JobScreen: JobScreen,
});

const WishListStack = createStackNavigator({
  WishListScreen: WishListScreen
});

const ProfileStack = createStackNavigator({
  ProfileScreen: ProfileScreen
});

const RootNavigator = createBottomTabNavigator(
  {
    Jobs: JobStack,
    'Wish List': WishListStack,
    Profile: ProfileStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Jobs') {
          // Because this icon supported by material then return here
          iconName = 'work';
          return <MaterialIcons name={iconName} size={26} color={tintColor}/>
        } else if (routeName === 'Wish List') {
          iconName = 'ios-list-box';
        } else if (routeName === 'Profile') {
          iconName = 'ios-person';
        } 

        return <Ionicons name={iconName} size={26} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#D3412B',
      inactiveTintColor: '#707070',
    },
  }
);

export default RootNavigator;

