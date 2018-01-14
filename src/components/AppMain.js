/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions/starwarsAction';
import StarList from './StarList';


class AppMain extends Component {


  constructor(props) {
    super(props);
    this.props = props;
    this.state = { showData: false }

  }
  componentWillMount() {

    console.log("loading for the first time");
  }
  componentDidMount() {
    console.log("loading for the did mount");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='fetchdata' onPress={this.props.getSWData} />
        {(!this.props.starwars.isFetching) && (this.props.starwars.data.length != 0) && <StarList style={{width: Dimensions.get('window').width, flex:1}} list={this.props.starwars.data}/>}
        {this.props.starwars.isFetching && <View style={styles.container}>
          <Text>Loading..........</Text>
        </View>}
        {/* {(!this.props.starwars.isFetching) && <View style={styles.container}>
          {this.props.starwars.data.map(person => <Text key={person.birth_year+person.name} style={{ color: 'red', fontSize: 20, textAlign: 'center', backgroundColor:'yellow' }}>{person.name}</Text>)}
        </View>} */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
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

mapStateToProps = (state) => {
  console.log("XXXXXXXXXXXXX state", state);
  return ({
    starwars: state.starwars
  });
}

mapDispatchToProps = (dispatch) => {
  console.log('dispatching app main');
  return ({
    getSWData: () => dispatch(fetchData())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
