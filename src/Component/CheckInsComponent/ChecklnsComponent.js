import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { GET_CHECK_INS } from '../../GraphQL/fetch';
import CustomCard from '../Card/Card';

const ChecklnsComponent = () => {
  const { loading, error, data } = useQuery(GET_CHECK_INS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  

  const checkIns = data.check_in;
  const userDpImage = require('../../assests/img/dp.png'); 
  return (
    <View style={styles.container}>
      <FlatList
        data={checkIns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            postImage={{ uri: item.image_url }} 
            userDpImage={userDpImage} 
            username={item.name}
            commentText={item.comment}
            
          />
          
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default ChecklnsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContent: {
    paddingBottom: 20, 
  },
});
