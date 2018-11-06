import React from 'react';
import { Platform, View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#fc82e4', 
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        position: 'relative',
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: { 
                    width: 0, 
                    height: 4,
                },
                shadowOpacity: 0.8
            },
            android: {
                elevation: 5
            },
        }),
    },
    textStyle: {
        fontSize: 20,
    },
};

export { Header };
