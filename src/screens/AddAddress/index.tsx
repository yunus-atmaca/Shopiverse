import styles from './styles';

import React, {useReducer} from 'react';
import {ScrollView, View} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import Text from '@/components/Text';
import TextInput, {inputReducer} from '@/components/TextInput';
import PhoneInput from '@/components/PhoneInput';
import Button from '@/components/Button';
import {Storage} from '@/utils';
import {IAddress} from '@/types/utils/Info';
import {navigationRef, RootStackScreenProps} from '@/navigation';
import {id} from '@/utils/helpers';

const getInitialState = (address?: IAddress) => {
  const valid = address ? true : false;
  return {
    fullName: {valid, value: address?.fullName ?? ''},
    phone: {valid, value: address?.phone ?? ''},
    addressLine1: {valid, value: address?.line1 ?? ''},
    addressLine2: {valid, value: address?.line2 ?? ''},
    province: {valid, value: address?.province ?? ''},
    district: {valid, value: address?.district ?? ''},
    postalCode: {valid, value: address?.postalCode ?? ''},
    title: {valid, value: address?.title ?? ''},
  };
};

const AddAddress = ({route: {params}}: RootStackScreenProps<'AddAddress'>) => {
  const [state, dispatch] = useReducer(
    inputReducer,
    getInitialState(params?.address),
  );
  const buttonDisabled =
    !state['fullName'].valid ||
    !state['phone'].valid ||
    !state['addressLine1'].valid ||
    !state['province'].valid ||
    !state['district'].valid ||
    !state['postalCode'].valid ||
    !state['title'].valid;

  const onSave = async () => {
    let _addresses: IAddress[] = [];

    const current = (await Storage.get(
      Storage.Keys.USER_ADDRESS,
    )) as IAddress[];

    const _address = {
      id: id(),
      line1: state['addressLine1'].value,
      line2: state['addressLine2'].value ?? '',
      province: state['province'].value,
      district: state['district'].value,
      postalCode: state['postalCode'].value,
      fullName: state['fullName'].value,
      phone: state['phone'].value,
      title: state['title'].value,
    };

    if (current && params?.address) {
      //Edit
      const filtered = current.filter(c => c.id !== params?.address?.id);
      _addresses.push(_address);
      _addresses = _addresses.concat(filtered);
    } else {
      //Add
      _addresses.push(_address);
      if (current) _addresses = _addresses.concat(current);
    }

    Storage.set(Storage.Keys.USER_ADDRESS, _addresses);
    navigationRef.goBack();
  };

  return (
    <PageWrapper removeTop>
      <PageHeader disableGab header="Add Address" />
      <ScrollView contentContainerStyle={{paddingBottom: 36}}>
        <Text.H typography="bold" style={[styles.ms, styles.mt]}>
          İletişim Bilgileri
        </Text.H>

        {/**FullName */}
        <View style={[styles.mt]}>
          <TextInput
            required
            value={state['fullName'].value}
            placeholder="First and last name"
            validator="minimum2Char"
            title="Full Name"
            onChangeText={e =>
              dispatch({type: 'value', payload: {field: 'fullName', value: e}})
            }
            errorText="Minimum 2 char"
            onValidationChanged={v =>
              dispatch({type: 'valid', payload: {field: 'fullName', value: v}})
            }
          />
        </View>

        {/**Phone */}
        <PhoneInput
          required
          validator="mobilePhone"
          title="Phone"
          currentPage="AddAddress"
          errorText="Format doğru değil"
          value={state['phone'].value}
          /*onPhoneChanged={(phone, country) => {
            dispatch({type: 'value', payload: {field: 'phone', value: phone}});
          }}*/
          onChangeText={e =>
            dispatch({type: 'value', payload: {field: 'phone', value: e}})
          }
          onValidationChanged={v =>
            dispatch({type: 'valid', payload: {field: 'phone', value: v}})
          }
        />

        <Text.H typography="bold" style={styles.ms}>
          Adres Bilgileri
        </Text.H>

        {/**Address line 1 */}
        <View style={styles.mt}>
          <TextInput
            required
            value={state['addressLine1'].value}
            placeholder="Street, Company Name"
            validator="minimum2Char"
            title="Address line 1"
            onChangeText={e =>
              dispatch({
                type: 'value',
                payload: {field: 'addressLine1', value: e},
              })
            }
            errorText="Minimum 2 char"
            onValidationChanged={v =>
              dispatch({
                type: 'valid',
                payload: {field: 'addressLine1', value: v},
              })
            }
          />
        </View>

        {/**Address line 2 */}
        <TextInput
          value={state['addressLine2'].value}
          placeholder="Apartment, unit, building, floor"
          title="Address line 2"
          onChangeText={e =>
            dispatch({
              type: 'value',
              payload: {field: 'addressLine2', value: e},
            })
          }
        />

        {/**Province */}
        <TextInput
          required
          value={state['province'].value}
          validator="minimum2Char"
          title="Province"
          onChangeText={e =>
            dispatch({
              type: 'value',
              payload: {field: 'province', value: e},
            })
          }
          errorText="Minimum 2 char"
          onValidationChanged={v =>
            dispatch({
              type: 'valid',
              payload: {field: 'province', value: v},
            })
          }
        />

        {/** District */}
        <TextInput
          required
          value={state['district'].value}
          validator="minimum2Char"
          title="District"
          onChangeText={e =>
            dispatch({
              type: 'value',
              payload: {field: 'district', value: e},
            })
          }
          errorText="Minimum 2 char"
          onValidationChanged={v =>
            dispatch({
              type: 'valid',
              payload: {field: 'district', value: v},
            })
          }
        />
        {/** postalCode */}
        <TextInput
          required
          value={state['postalCode'].value}
          validator="minimum2Char"
          title="Postal Code"
          onChangeText={e =>
            dispatch({
              type: 'value',
              payload: {field: 'postalCode', value: e},
            })
          }
          errorText="Minimum 2 char"
          onValidationChanged={v =>
            dispatch({
              type: 'valid',
              payload: {field: 'postalCode', value: v},
            })
          }
        />

        {/** title */}
        <TextInput
          required
          value={state['title'].value}
          validator="minimum2Char"
          title="Address Title"
          onChangeText={e =>
            dispatch({
              type: 'value',
              payload: {field: 'title', value: e},
            })
          }
          errorText="Minimum 2 char"
          onValidationChanged={v =>
            dispatch({
              type: 'valid',
              payload: {field: 'title', value: v},
            })
          }
        />

        <View style={styles.mt}>
          <Button
            disabled={buttonDisabled}
            onClick={onSave}
            text={params?.address ? 'Edit' : 'Save'}
          />
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default AddAddress;
