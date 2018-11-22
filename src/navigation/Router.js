import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import JobScreen from '../components/JobScreen';
import JobDetailScreen from '../components/jobScreenStack/JobDetailScreen';
import WishListScreen from '../components/WishListScreen';
import ProfileScreen from '../components/ProfileScreen';

import {
  COLOR_MAIN,
  COLOR_TEXT_MUTED,
} from '../constant/ColorCode';

const JobStack = createStackNavigator({
  JobScreen: {
    screen: JobScreen,
    navigationOptions: () => ({
      title: 'Jobs',
      headerTintColor: COLOR_MAIN,
      headerTitleStyle: { fontSize: 22 }
    })
  },
  JobDetailScreen: {
    screen: JobDetailScreen
  }
});

const WishListStack = createStackNavigator({
  WishListScreen: {
    screen: WishListScreen,
    navigationOptions: () => ({
      title: 'Wish List',
      headerTintColor: COLOR_MAIN,
      headerTitleStyle: { fontSize: 22 }
    }),
  },
});

WishListStack.navigationOptions = {
  tabBarLabel: 'Wish List'
};

const ProfileStack = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile',
      headerTintColor: COLOR_MAIN,
      headerTitleStyle: { fontSize: 22 }
    }),
  },
});

const RootNavigator = createBottomTabNavigator(
  {
    Jobs: JobStack,
    WishList: WishListStack,
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
        } else if (routeName === 'WishList') {
          iconName = 'ios-list-box';
        } else if (routeName === 'Profile') {
          iconName = 'ios-person';
        } 

        return <Ionicons name={iconName} size={26} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: COLOR_MAIN,
      inactiveTintColor: COLOR_TEXT_MUTED,
    },
  }
);

export default RootNavigator;

