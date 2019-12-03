import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>

        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={ () => this.props.navigation.navigate('Details')}
        />
        <Button
        title="Go to Other"
        onPress={ () => this.props.navigation.navigate('Other')}
        /> 

      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', 
      justifyContent: 'center' }}>
       
        <Text>Details Screen</Text>

      </View>
    );
  }
}

class OtherScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', 
        justifyContent: 'center' }}>
         
          <Text>Other Screen</Text>
  
        </View>
      );
    }
  }

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Other: OtherScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(MainStack);