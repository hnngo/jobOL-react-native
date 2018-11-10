import React from 'react';
import { 
  View,
  TextInput,
  Platform,
  StyleSheet
} from 'react-native';

import {
    INPUT_BORDER_COLOR,
    INPUT_SHADOW_COLOR,
    INPUT_BG_COLOR,
} from '../../constant/ColorCode';

const InputLoginForm = (props) => {
    const { 
        value,
        onChangeText,
        placeholder,
        secureTextEntry,
        editable,
        keyboardType,
        returnKeyType
    } = props;

    const { inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                editable={false || editable}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    inputStyle: {
        color: INPUT_BG_COLOR,
        fontSize: 18,
        width: 180,
        textAlign: 'center'
    },

    containerStyle: {
        margin: 5,
        width: 220,
        height: 50,
        borderColor: INPUT_BORDER_COLOR,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
              shadowColor: INPUT_SHADOW_COLOR,
              shadowOffset: {
                  width: 0,
                  height: 2,
              },
              shadowOpacity: 0.7,
              shadowRadius: 2,
              elevation: 1,
          },
          android: {
              elevation: 1,
          },
      }),
    }
});

export { InputLoginForm };
