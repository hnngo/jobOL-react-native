import React from 'react';
import { 
  View,
  TextInput,
  Platform,
  StyleSheet
} from 'react-native';

const InputLoginForm = (props) => {
    const { value, onChangeText, placeholder, secureTextEntry, editable } = props;
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
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    inputStyle: {
        color: '#000000',
        fontSize: 18,
        width: 180,
        textAlign: 'center'
    },

    containerStyle: {
        margin: 5,
        width: 220,
        height: 50,
        borderColor: '#c13725',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
              shadowColor: '#7e6a67',
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
