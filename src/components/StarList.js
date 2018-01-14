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
            <View style={{width: Dimensions.get('window').width,height: 400, backgroundColor: '#FFF'}}>
                <Text>this is the list</Text>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={person => ListItem(person)}
            />
            <Text>ENd of the list</Text>
            </View>
        );
    }
  }

  const ListItem = function(ListItem){
    return(
        <View style={{ backgroundColor:'blue', height: 50, borderColor:'red'}}>
        <Text style={{color:'#000', fontSize:20, textAlign: 'center'}}rr>{ListItem.name}</Text>
        </View>
    );
  }