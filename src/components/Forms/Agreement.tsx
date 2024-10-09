import styles from './styles/agreement';

import React, {useMemo} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Styles from '@/theme/style';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import {navigationRef} from '@/navigation';

type Props = {
  /**
   * send urls respectively
   */
  urls: string[];
  /**
   * if you wanna show highlighted string, send like this: **highlighted**
   * ex: I agree with **Terms** and **Privacy**
   * ex: I agree with **Company Policy**
   */
  agreementText: string;
  checked: boolean;
  onValueChange: () => void;
};

interface FormattedStr {
  str: string;
  urlInx: number;
}

const Agreement = ({onValueChange, checked, urls, agreementText}: Props) => {
  const theme = useTheme();
  //const [checked, setChecked] = useState(false);

  //TODO: not working when input like this -> **Company Policy**
  const formatted = useMemo(() => {
    const split = agreementText.split(' ');

    const _formatted: FormattedStr[] = [];
    let _urlInx = 0;
    split.forEach(s => {
      if (s.length > 4) {
        const firstMarker = s.substring(0, 2);
        const secondMarker = s.substring(s.length - 2, s.length);
        if (firstMarker === '**' && secondMarker === '**') {
          _formatted.push({
            str: s.substring(2, s.length - 2) + ' ',
            urlInx: _urlInx,
          });
          _urlInx += 1;
        } else {
          _formatted.push({str: s + ' ', urlInx: -1});
        }
      } else {
        _formatted.push({str: s + ' ', urlInx: -1});
      }
    });

    if (__DEV__ && _urlInx - 1 !== urls.length - 1) {
      throw new Error(
        'number of highlighted string and urls length must ben the same',
      );
    }

    return _formatted;
  }, [agreementText, urls]);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={checked}
        disableText
        size={Styles.hs(18)}
        fillColor={theme.checkBoxFilled as string}
        unFillColor={theme.checkBoxUnFilled as string}
        text="Custom Checkbox"
        iconStyle={{borderColor: theme.checkBoxFilled}}
        innerIconStyle={{borderWidth: 1}}
        textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={onValueChange}
      />
      <Text.P style={{marginStart: 6}}>
        {formatted.map((f, index) => {
          return (
            <Text.P
              onPress={() =>
                navigationRef.navigate('ModalWebview', {url: urls[f.urlInx]})
              }
              color={f.urlInx !== -1 ? theme.textHighlighted : undefined}
              typography={f.urlInx !== -1 ? 'bold' : undefined}
              size={14}
              key={'f-' + index}>
              {f.str}
            </Text.P>
          );
        })}
      </Text.P>
    </View>
  );
};

export default Agreement;
