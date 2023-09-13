import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const formatDay = (day) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = (day < 30) ? day % 20 : day % 30;
    const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return day + suffix;
};

const CustomCard = (props) => {
    const { postImage, userDpImage, username,  commentText } = props;
    
    const currentDate = () => {
        const today = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const day = formatDay(today.getDate());
        const month = monthNames[today.getMonth()];
        const year = today.getFullYear();
        return `${day} of ${month} ${year}`;
    };


    return (
        <View style={styles.card}>
            <Image source={postImage} style={styles.postImage} />
            <View style={styles.edges} >
                <View style={styles.DpImageContainer}>
                    <Image source={userDpImage} style={styles.userDpImage} resizeMode='center'/>
                </View>
                <View style={styles.join}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.currentDate}>{currentDate()}</Text>
                </View>
            </View>
            <Text style={styles.commentText}>{commentText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 342,
        height: 379,
        top: 20,
        borderRadius: 8,
        borderColor: '#000',
        backgroundColor: '#F9F9F9',
        alignSelf: 'center',
       marginBottom:20
    },
    postImage: {
        width: 310,
        height: 220,
        borderRadius: 8,
        marginTop: 10,
        alignSelf: 'center'
    },
    DpImageContainer:{
        backgroundColor: '#D2D2D2',
        borderRadius:10
    },
    userDpImage: {
        width: 43,
        height: 43,
        
        alignSelf: 'center',
    },
    username: {
        width: 50,
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: 'left',
        color:'#171A1F',
    },
    edges: {
        flexDirection: "row",
        paddingHorizontal:30,
        marginTop:20,

    },

    join:{
   paddingLeft:10
    },
    currentDate: {
       color:'#4027DF',
    },
    commentText: {
        width: 310,
        marginTop:20,
        height: 44,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: 'left',
        color: '#171A1F',
        paddingHorizontal:20
    },
});

export default CustomCard;
