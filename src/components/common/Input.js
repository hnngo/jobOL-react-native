import React from 'react';
import { View, Text, TextInput } from 'react-native';

// Can wirte like this
// Const Input = ({ lable }) => {
// ES6 type
const Input = (props) => {
    const { lable, value, onChangeText, placeholder, secureTextEntry } = props;
    const { inputStyle, lableStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={lableStyle}>{lable}</Text>
            <TextInput
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

const styles = {
    inputStyle: {
        color: '#000000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2,
    },

    lableStyle: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
};

export { Input };
