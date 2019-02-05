import React from 'react';
import { StyleSheet, Text,  ScrollView, View} from 'react-native';
import Navbar from './Navbar';
import Tabbar from './Tabbar';
import Body from './Body';
import data from './search.json';

export default class Youtube extends React.Component {
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