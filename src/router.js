import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { SplashContainer, LoginContainer, SignUpContainer } from './auth/index';
import { FeedListContainer, FeedWebviewContainer } from './feed/index';
import { SubscribeContainer } from './subscribe/index';
import { DrawerContainer } from './drawer/index';

import { colors } from './utils/index';

export const FeedStack = StackNavigator({
  Feed: {
    screen: FeedListContainer,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: colors.headerBackgroundColor },
      headerTitleStyle: { color: colors.headerElementColor },
      title: 'FEED',
      headerLeft: (
        <Icon
          name='menu'
          color={colors.headerElementColor}
          iconStyle={{ marginLeft: 8, padding: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')} />
      ),
      headerRight: (
        <Icon
          name='md-add'
          type='ionicon'
          color={colors.headerElementColor}
          iconStyle={{ marginRight: 8, padding: 10 }}
          onPress={() => navigation.navigate('Subscribe')} />
      ),
    }),
  },
  Webview: {
    screen: FeedWebviewContainer,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: colors.headerBackgroundColor },
      headerTitleStyle: { color: colors.headerElementColor },
      title: `${navigation.state.params.item.title}`,
      gesturesEnabled: false,
    }),
  },
  Subscribe: {
    screen: SubscribeContainer,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: colors.headerBackgroundColor },
      headerTitleStyle: { color: colors.headerElementColor },
      title: 'ADD',
    }),
  },
});

const DrawerStack = DrawerNavigator(
  {
    Stack: {
      screen: FeedStack
    }
  },
  {
    contentComponent: DrawerContainer,
    contentOptions: {
      activeTintColor: '#e91e63',
      style: {
        flex: 1,
        paddingTop: 15,
      }
    }
  }
);

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
  Splash: {
    screen: SplashContainer,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUpContainer,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: DrawerStack,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});
