import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { SplashContainer, LoginContainer, SignUpContainer } from './auth/index';
import { FeedListContainer, FeedWebviewContainer } from './feed/index';
import { SubscribeContainer } from './subscribe/index';

export const FeedStack = StackNavigator({
  Feed: {
    screen: FeedListContainer,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#efefef' },
      title: 'ALL',
      headerRight: (
        <Icon
          name='md-add'
          type='ionicon'
          color='#575656'
          iconStyle={{ marginRight: 18 }}
          onPress={() => navigation.navigate('Subscribe')} />
      ),
    }),
  },
  Webview: {
    screen: FeedWebviewContainer,
    navigationOptions: {
      title: 'ALL',
    },
  },
  Subscribe: {
    screen: SubscribeContainer,
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
    screen: FeedStack,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});
