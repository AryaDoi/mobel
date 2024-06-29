import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'mang Jef.', phone: '+1 226-120-240', photo: require('../assets/jefbejos.jpg') },
  { id: '2', name: 'teh lisa', phone: '+82 20-2024-0987', photo: require('../assets/lisa.jpg') },
  { id: '3', name: 'a elon', phone: '+1 227-220-250', photo: require('../assets/elon.jpg') },
  { id: '2', name: 'oda sensei', phone: '+81 342-571', photo: require('../assets/oda.jpg') },
  { id: '2', name: 'pak presiden Jokowi', phone: '+62 822-3089-1923', photo: require('../assets/pakjokowi.jpg') },
  { id: '2', name: 'kakek hiro', phone: '+81 332-691', photo: require('../assets/hirohito.jpg') },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate('Detail', { contact: item })}
          >
            <Image source={item.photo} style={styles.contactPhoto} />
            <Text style={styles.contactName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactName: {
    fontSize: 18,
  },
});

export default Home;