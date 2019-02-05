import React from 'react';
import { StyleSheet, Text,  ScrollView} from 'react-native';
import Header from './src/components/Header';
import Mid from './src/components/Mid';
import Body from './src/components/Body';


export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header />
        <Mid />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
