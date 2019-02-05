import React from 'react';
import { StyleSheet, Text,  ScrollView, View} from 'react-native';
import Router from './src/Router';

export default class App extends React.Component {
  render() {
    return <Router />
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});