import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { Button } from '@mui/material';
import ChecklnsComponent from '../Component/CheckInsComponent/ChecklnsComponent';
import SubmitComponent from '../Component/SubmitComponent/SubmitComponent';
const HomeScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const slideX = new Animated.Value(0);

    const handleSlide = (index) => {
        setSelectedIndex(index);
        const toValue = -index * 75;
        Animated.spring(slideX, {
            toValue,
            useNativeDriver: false,
        }).start();
    };

    const renderOption = (index, text) => {
        const isActive = selectedIndex === index;
        return (
            <TouchableOpacity
                key={index}
                onPress={() => handleSlide(index)}
                style={[
                    styles.option,
                    isActive && styles.activeOption,
                ]}
            >
                <Text style={[styles.optionText, isActive && styles.activeOptionText]}>{text}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={styles.title}>Checkins</Text>
            </View>
            <View style={styles.optionsContainer}>
                {renderOption(0, 'Submit')}
                {renderOption(1, 'Check-ins')}
            </View>
            <Animated.View style={[styles.slideContainer, { transform: [{ translateX: slideX }] }]}>
                {selectedIndex === 0 ? <SubmitComponent /> : <ChecklnsComponent/>}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    subcontainer: {
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
        top: 40,
        color: 'black',
    },
    optionsContainer: {
        flexDirection: 'row',
        marginTop: 50,
        
    },
    option: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        
    },
    activeOption: {
        borderBottomWidth:2,
        
    },
    optionText: {
        color: 'black',
        fontSize:14,
        fontFamily: 'Nunito',
        fontWeight: '700',
    },
    activeOptionText: {
       
    },
    slideContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F1F1F1'
    },
});





export default HomeScreen;
