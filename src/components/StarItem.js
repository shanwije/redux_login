import React , { Component } from "react";
import {
View,
Text,
StyleSheet,
Button,
Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {selectItem, disSelectItem} from '../actions/starwarsItemAction';
import { bindActionCreators } from "redux";





class StarItem extends Component{

    componentWillMount(){
        if(this.props.sItem){
            this.ListItem = this.props.sItem;
        }
    }
    render(){
        console.log("star item props : ",this.props);
        return(
            <View key={this.ListItem.name} style={{ backgroundColor:'blue', borderColor:'red', borderWidth:2, flex:4, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'#000', fontSize:20, textAlign: 'center'}} >{this.ListItem.name}</Text>
            <Button title='select' onPress={()=> this.itemSelected(this.ListItem.name)} ></Button>
            {(this.ListItem.name == this.props.selected.key) && <View style={{backgroundColor: '#fff',width: Dimensions.get('window').width ,flex:1}}>
                <Text>{"Skin Color :"+this.ListItem.skin_color}</Text>
                <Text>{"Eye Color :"+ this.ListItem.eye_color}</Text>
                <Text>{"Birth Year :"+ this.ListItem.birth_year}</Text>
                <Text>{"Gender :" +this.ListItem.gender}</Text>
            </View>}
            </View>
        );
    }


    itemSelected( ListItem){
        console.log("pressed ......", ListItem);
        if(this.ListItem.name == this.props.selected.key){
            this.props.swDeselect(ListItem);
        }else{
            this.props.swSelect(ListItem);
        }

    }
  }

  const mapStateToProps = (state) => {
    return {
        selected : state.starItem
    }
}

 const mapDispatchToProps = (dispatch) => {
     return {
         swSelect: (key) => {
             dispatch(selectItem(key))
         },
         swDeselect: (key) => {
            dispatch(disSelectItem(key))
        }
     }
 }

  export default connect(mapStateToProps, mapDispatchToProps)(StarItem);