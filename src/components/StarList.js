import React, { Component } from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ListView
  } from 'react-native';
  import { connect } from 'react-redux';
  import { fetchData } from '../actions/starwarsAction';
  import StarItem from './StarItem';

  
  export default class StarList extends Component {

    componentWillMount(){
        console.log("ZZZZZZZZZZZ",this.props.list);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          dataSource: ds.cloneWithRows(this.props.list),
        });
    }
    render(){
        console.log();
        return(
            <View style={{width: Dimensions.get('window').width,backgroundColor: '#FFF', flex:1}}>
                <Text>this is the list</Text>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={person => <View><StarItem sItem ={person}/></View>}
            />
            <Text>ENd of the list</Text>
            </View>
        );
    }
  }

