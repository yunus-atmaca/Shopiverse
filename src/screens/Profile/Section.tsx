import styles from './styles/section';

import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {ISection} from '@/types/utils/ComponentData';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Icon from '@/components/Icon';
import {navigationRef} from '@/navigation';

type Props = {
  data: ISection;
};

const Section = ({data: {title, options}}: Props) => {
  const theme = useTheme();

  return (
    <View style={styles.section}>
      {title && (
        <Text.H style={styles.title} size={14} typography="semiBold">
          {title}
        </Text.H>
      )}
      <View
        style={[
          styles.sectionContent,
          {
            backgroundColor: theme.boxBG,
            borderColor: theme.border,
          },
        ]}>
        {options.map((option, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (option.navigateTo)
                  navigationRef.navigate(
                    option.navigateTo as any,
                    option.navigateParams,
                  );
              }}
              activeOpacity={0.7}
              style={styles.option}
              key={'option-' + index}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {option.icon && (
                  <Icon color={theme.iconHighlighted} name={option.icon} />
                )}
                <Text.P style={{marginStart: 8}}>{option.name}</Text.P>
              </View>
              <Icon color={theme.iconBG} name={'ArrowRight'} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default memo(Section, () => true);
