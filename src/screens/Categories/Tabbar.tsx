import {TabbarProps} from './types';
import styles from './styles/tabbar';

import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

const Tabbar = ({
  jumpTo,
  navigationState: {index, routes},
  position,
}: TabbarProps) => {
  const theme = useTheme();

  //console.debug(index, position);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderBottomColor: theme.border,
        },
      ]}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {routes.map((route, routeIndex) => {
            const focused = routeIndex === index;

            //console.debug(focused);
            return (
              <TouchableOpacity
                onPress={() => jumpTo(route.key)}
                activeOpacity={0.7}
                key={route.key}
                style={[
                  styles.tab,
                  {
                    borderColor: focused
                      ? theme.borderHighlighted
                      : 'transparent',
                  },
                ]}>
                <Text.H typography="bold" align="center" size={12}>
                  {route.title}
                </Text.H>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Tabbar;
