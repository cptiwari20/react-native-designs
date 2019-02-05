import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Body from './Body';
import Mid from './Mid';
import Header from './Header';

class Portfolio extends Component {
  render(){
    return (
      <ScrollView>
        <Header />
        <Mid />
        <Body />
      </ScrollView>
    )
  }
}