import React, { Component } from 'react';
import {View, Image, Button } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {

    pic1 = {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/71VfNyUPlkL._SL1200_.jpg'
    }
    pic2 = {
      uri: 'https://stagea.blob.core.windows.net/images/show/3841/harvey-r0gxq4pt.syd.jpg'
    }
    pic3 = {
      uri: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Putnamcountyspellingbeealbumcover.jpg'
    }

    return (
      <View style={{flex: 2, top: 50}}> 

      <View style={{flex: 2, justifyContent: 'center', flexDirection: 'row'}}>
        <Image style={{height: 100, width: 100}} source={pic1}/> 
        <Image style={{height: 100, width: 100}} source={pic2}/> 
        <Image style={{height: 100, width: 100}} source={pic3}/> 
      </View>

      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => { alert("Spamalot! Harvey! Spelling Bee!");
        }}
          title="Play"
        /> 
      </View>

      </View> 
    );
  }
};
