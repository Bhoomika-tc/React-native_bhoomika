import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  // const [text, setText] = useState('');
 const [text, onChangeText] = React.useState('Useless Text');

  console.log("Text Input Value:", text);
  return (
    <View style={styles.cardlp}>
      <View style={styles.cardsec}>
        <View style={styles.cardContents}>
          <View style={styles.heading}>
            <View style={styles.textContainer}>
              <Text style={styles.gm}>Good Morning</Text>
              <Text style={styles.title}>Yunus</Text>
            </View>
            <Image style={styles.img} source={require('./assets/notification.png')} />
          </View>
          <View style={styles.searchboxsec}>
          <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardlp: {
    minWidth: '100%',
    minHeight: '100%',
  },
  cardsec: {
    marginTop: 40,
    marginBottom: 'auto',
    borderRadius: 50,
    borderWidth: 5,
    minWidth: '60%',
    minHeight: '95%',
    borderColor: '#fff',
  },
  cardContents: {
    width: '90%',
    height: '95%',
    marginHorizontal: 20,
    marginVertical: 'auto',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gm: {
    color: 'rgb(205, 205, 205)',
    fontSize: 18,
    fontWeight: "600",
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: "600",
    color: '#000',
    fontSize: 30,
  },
  searchboxsec: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 30,
    shadowColor: 'black',
    elevation: 8,
    // paddingLeft: 20,
  },
  input: {
    height: '100%',
    padding: 10,
    fontSize: 18,
    
  },
});
// input: {
//   height: 40,
//   borderColor: 'gray',
 

// },