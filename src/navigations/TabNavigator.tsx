/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Dashboard from '../pages/Dashboard';
import HomeIcon from '../assets/svgs/home_fill_ic.svg';
import ReelsIcon from '../assets/svgs/IGTV_ic.svg';
import UnionIcon from '../assets/svgs/new_photo_video_ic.svg';
import HeartIcon from '../assets/svgs/heart_outline_ic.svg';
import ProfileIcon from '../assets/svgs/profile_outline_ic.svg';
import {useTheme} from 'styled-components';
import {TabBarNavigationProps} from './Types';
import Logo from '../Components/Logo';

type TabParamsList = {
  home: undefined;
  search: undefined;
  newPost: undefined;
  activity: undefined;
  profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<TabParamsList>();

interface TabNavigatorProps {
  navigation: TabBarNavigationProps;
}

export default function TabNavigator(props: TabNavigatorProps) {
  const {
    PRIMARY_BACKGROUND_COLOR,
    PRIMARY_TEXT_COLOR,
    HAIRLINE_COLOR,
  } = useTheme();

  const iconStyle = {
    width: 25,
    height: 25,
    fill: PRIMARY_TEXT_COLOR,
  };

  React.useLayoutEffect(() => {
    const {navigation} = props;
    navigation.setOptions({
      headerLeft: () => <Logo width={120} />,
      headerStyle: {
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
      },
    });
  });

  return (
    <Tab.Navigator
      shifting={false}
      labeled={false}
      initialRouteName="home"
      barStyle={{
        borderTopWidth: 1,
        borderTopColor: HAIRLINE_COLOR,
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
      }}>
      <Tab.Screen
        name="home"
        component={Dashboard}
        options={{
          tabBarIcon: () => <HomeIcon {...iconStyle} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={Dashboard}
        options={{
          tabBarIcon: () => <ReelsIcon {...iconStyle} />,
        }}
      />
      <Tab.Screen
        name="newPost"
        component={Dashboard}
        options={{
          tabBarIcon: () => <UnionIcon {...iconStyle} />,
        }}
      />
      <Tab.Screen
        name="activity"
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <HeartIcon
              width={iconStyle.width}
              height={iconStyle.height}
              stroke={PRIMARY_TEXT_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Dashboard}
        options={{
          tabBarIcon: () => <ProfileIcon {...iconStyle} />,
        }}
      />
    </Tab.Navigator>
  );
}
