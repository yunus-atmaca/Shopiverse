import styles from './styles';

import React, {FC, useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Styles from '@/theme/style';
import {useTheme} from '@/hooks/theme';
import Icon from '@/components/Icon';

const {vs} = Styles;

const TabBar: FC<BottomTabBarProps> = ({state, navigation}) => {
  const theme = useTheme();

  const {bottom} = useSafeAreaInsets();
  const BOTTOM = bottom === 0 ? vs(16) : bottom;

  const getIcon = useCallback((tab: string, isActive: boolean) => {
    const color = isActive ? theme.tabbarFocusedTab : theme.tabbarUnFocusedTab;
    if (tab === 'Home') return <Icon color={color} name="Home" />;
    else if (tab === 'Categories')
      return <Icon color={color} name="Categories" />;
    else if (tab === 'WhishList')
      return <Icon color={color} name="HeartFilled" />;
    else if (tab === 'Cart') return <Icon color={color} name="ShoppingCart" />;
    else if (tab === 'Profile') return <Icon color={color} name="Person" />;
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: BOTTOM,
          borderColor: theme.borderLight,
          backgroundColor: theme.tabbarBG,
        },
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
              style={styles.tab}>
              {getIcon(label, isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
