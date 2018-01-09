/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import {fetchData } from '../actions/starwarsAction';


class AppMain extends Component {


constructor(props){
    super(props);
    this.props = props;

}
  render() {
    return (
      <View style={styles.container}>
        <Button title='fetchdata' onPress={this.props.getSWData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

mapStateToProps = (state) =>{
    console.log("XXXXXXXXXXXXX state",state);
    return({
        starwars : state.starwars
    });
}

mapDispatchToProps = (dispatch) =>{
    console.log('dispatching app main');
    return({
        getSWData : () =>dispatch(fetchData())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
