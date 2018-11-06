import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { children, onPress } = props;

    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={styles.buttonStyle}
        >
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fc82e4',
        marginLeft: 5,
        marginRight: 5,
    },

    textStyle: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export { Button };
