import styles from './styles';

import {ICountry} from './types';
import _countries from './countries.json';

import React, {useState} from 'react';
import {View, FlatList, ListRenderItem, TouchableOpacity} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import TextInput from '@/components/TextInput';
import Text from '@/components/Text';
import {navigationRef, RootStackScreenProps} from '@/navigation';

const Countries = ({route: {params}}: RootStackScreenProps<'Countries'>) => {
  const [filtered, setFiltered] = useState<ICountry[]>(_countries);
  const [searched, setSearched] = useState('');

  const renderCountry: ListRenderItem<ICountry> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigationRef.navigate(params.navigateTo as any, {
            country: item,
          });
        }}
        activeOpacity={0.7}
        style={styles.country}>
        <Text.P
          style={{maxWidth: '80%'}}>{`${item.flag}   ${item.name}`}</Text.P>
        <Text.P>{`${item.callingCode}`}</Text.P>
      </TouchableOpacity>
    );
  };

  const _onChangeText = (text: string) => {
    if (text.length === 0) {
      setFiltered(_countries);
    } else {
      setFiltered(
        _countries.filter(c =>
          c.name.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    }

    setSearched(text);
  };

  return (
    <PageWrapper removeTop>
      <PageHeader disableGab header="Countries" />
      <View style={{marginVertical: 12}}>
        <TextInput
          value={searched}
          onChangeText={_onChangeText}
          placeholder="Country"
          headingIcon="Search"
        />
      </View>
      <FlatList<ICountry>
        data={filtered}
        renderItem={renderCountry}
        showsVerticalScrollIndicator={false}
        keyExtractor={_ => _.cca2}
      />
    </PageWrapper>
  );
};

export default Countries;
