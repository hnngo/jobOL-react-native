import React from 'react';
import { View } from 'react-native';

import { 
    COLOR_BG,
    INPUT_BORDER_COLOR
} from '../../constant/ColorCode';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: COLOR_BG,
        justifyContent: 'flex-start',
        // flexDirection: 'row',
        borderColor: INPUT_BORDER_COLOR,
        position: 'relative',
    }
};

export { CardSection };
