import React from 'react';
import { StyleSheet, Text,  ScrollView, View} from 'react-native';
import Navbar from './src/components/Youtube/Navbar';
import Tabbar from './src/components/Youtube/Tabbar';
import Body from './src/components/Youtube/Body';

import data from './src/components/Youtube/search.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <ScrollView>
        <Body video= {data.items[0]} />
        <Body video= {data.items[1]} />
        <Body video= {data.items[2]} />
        <Body video= {data.items[3]} />
        <Body video= {data.items[4]} />

        </ScrollView>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});