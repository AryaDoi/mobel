import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <Image source={contact.photo} style={styles.contactPhoto} />
      <Text style={styles.detail}>Name: {contact.name}</Text>
      <Text style={styles.detail}>Phone: {contact.phone}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  contactPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Detail;