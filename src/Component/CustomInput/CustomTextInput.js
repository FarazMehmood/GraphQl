import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    const { width, height, borderColor, placeholderColor, ...otherProps } = props;

    return (
        <TextInput
            style={[
                styles.input,
                {
                    width,
                    height,
                    borderColor,
                    backgroundColor: 'white',
                },
            ]}
            placeholderTextColor={placeholderColor}
            {...otherProps}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal:15,
        fontSize: 16,
        alignSelf: 'center',
    },
});

export default CustomTextInput;
