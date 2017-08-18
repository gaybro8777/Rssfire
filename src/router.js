import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// import { SignInScreen, SignInErrorScreen } from './auth/index';
import { SignInContainer } from './auth/index';
import { FeedListScreen } from './feed/index';
import { SubscribeScreen } from './subscribe/index';

export const FeedStack = StackNavigator({
  Feed: {
    screen: FeedListScreen,
    navigationOptions: {
      title: 'ALL',
    },
  },
  Subscribe: {
    screen: SubscribeScreen,
    navigationOptions: {
      title: 'ADD',
    },
  },
});

// export const Tabs = TabNavigator({
//   Repositories: {
//     screen: RepositoryStack,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) =>
//         <Icon name="repo" type="octicon" size={28} color={tintColor} />,
//     },
//   },
//   Settings: {
//     screen: SettingsStack,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) =>
//         <Icon name="settings" type="SimpleLineIcons" size={33} color={tintColor} />,
//     },
//   },
// },
//   {
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       showLabel: false,
//     },
//   });
//
export const Root = StackNavigator({
  SignIn: {
    screen: SignInContainer,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: FeedStack,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});
