import styles from './styles/back';
import {CardTypes, creditCardTypes, Focus} from './types';

import React, {useMemo} from 'react';
import {Image, Text, View} from 'react-native';

type Props = {
  type?: string;
  focus?: Focus;
  cvv: string;
};

const Back = ({focus, type, cvv}: Props) => {
  const typeProps = useMemo(() => {
    return type ? creditCardTypes[type as CardTypes] : undefined;
  }, [type]);

  return (
    <View
      pointerEvents={focus === Focus.CVV ? 'auto' : 'none'}
      style={[styles.container, {opacity: focus === Focus.CVV ? 1 : 0}]}>
      <View style={styles.top}>
        <View style={styles.band} />
      </View>
      <View style={styles.mid}>
        <View style={styles.midContent}>
          <View style={styles.midBand} />
          <View style={styles.cvv}>
            <Text style={styles.cvvText}>{cvv || 'XXX'}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        {typeProps && (
          <Image
            style={{width: typeProps.width, height: typeProps.height}}
            source={typeProps.image}
          />
        )}
      </View>
    </View>
  );
};

export default Back;
