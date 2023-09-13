import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import CustomTextInput from '../CustomInput/CustomTextInput';
import CustomButton from '../Button/Button';
import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { Insert_QUERY } from '../../GraphQL/insert';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SubmitComponent = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const INSERT_CHECK_IN = gql`
  mutation InsertCheckIn($name: String!, $comment: String!, $imageUrl: String!) {
    insert_check_in(objects: { name: $name, comment: $comment, image_url: $imageUrl }) {
      affected_rows
    }
  }
`;

    const [insertCheckIn] = useMutation(INSERT_CHECK_IN);

    const closeSuccessModal = () => {
        setSuccessModalVisible(false);
    };

    const handleAddCheckIn = async () => {
        try {
            const { data } = await insertCheckIn({
                variables: {
                    name,
                    comment,
                    imageUrl,
                },
            });

            console.log('Check-in added:', data);

            if (data.insert_check_in.affected_rows === 1) {
                setSuccessMessage('Data inserted successfully.affected_rows": 1');
                setSuccessModalVisible(true);
            }

            setName('');
            setComment('');
            setImageUrl('');
        } catch (error) {
            console.error('Error adding check-in:', error);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <CustomTextInput
                    width={343}
                    height={50}
                    borderColor="#000000"
                    placeholderColor="#D2D2D2"
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.subContainer}>
                <CustomTextInput
                    width={343}
                    height={50}
                    borderColor="#000000"
                    placeholderColor="#D2D2D2"
                    placeholder="Comment"
                    value={comment}
                    onChangeText={setComment}
                />
            </View>

            <View style={styles.subContainer}>
                <CustomTextInput
                    width={343}
                    height={50}
                    borderColor="#000000"
                    placeholderColor="#D2D2D2"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChangeText={setImageUrl}
                />
            </View>


            <View style={styles.subContainer}>
                <CustomButton title="ADD" onPress={handleAddCheckIn} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={successModalVisible}
                onRequestClose={closeSuccessModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.successText}>{successMessage}</Text>
                        <TouchableOpacity onPress={closeSuccessModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        paddingTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    successText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButtonText: {
        fontSize: 16,
        color: 'blue',
    },
});

export default SubmitComponent;
