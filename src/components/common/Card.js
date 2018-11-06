import React from 'react';
import { Platform, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 0.5,
        borderRadius: 2,
        borderColor: '#fc82e4',
        borderBottomWidth: 0,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 1,
            },
            android: {
                elevation: 1,
            },
        }),
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
    }
};

export { Card };
