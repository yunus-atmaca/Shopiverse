import styles from './styles';

import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Styles from '@/theme/style';

const {vs, device, hs, spacing} = Styles;
export const BANNER_HEIGHT = 0;
export const TABBAR_HEIGHT = vs(64) + BANNER_HEIGHT;
const TABBAR_WIDTH = device.width - hs(spacing.l) * 2;
export const WORLD_BUTTON_WIDTH = hs(64);
export const TAB_WIDTH = (TABBAR_WIDTH - WORLD_BUTTON_WIDTH) / 2;

const TabBar: FC<BottomTabBarProps> = ({state, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  const BOTTOM = bottom === 0 ? vs(16) : bottom;

  return (
    <View
      style={[
        styles.container,
        {paddingBottom: BOTTOM, height: TABBAR_HEIGHT},
      ]}>
      <View style={styles.tabs}>
        {state.routes.map((route, index) => {
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={onPress}
              key={label}
              style={[styles.tab, {width: TAB_WIDTH}]}>
              <Text>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
