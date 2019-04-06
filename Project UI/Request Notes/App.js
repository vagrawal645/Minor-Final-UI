import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,Dimensions,TouchableOpacity} from 'react-native';
//type Props = {};
import bgimage from './Images/2.jpeg';
const {width:WIDTH} = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <ImageBackground 
        source={bgimage}
        style={styles.container}
        resizeMode="stretch"
      >
      <View>
        <Text style = {styles.text}> REQUEST NOTES </Text>
      </View>
      <View>
        <TextInput
        style = {styles.input}
          placeholder='ENTER SEMESTER'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
        />
      </View>
      <View>
        <TextInput
        style = {styles.input}
          placeholder='ENTER SUBJECT'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
        />
      </View>
      <TouchableOpacity style = {styles.btn}>
        <Text style = {styles.text1}>Request</Text>
      </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems:'center',
  },
  input:{
    width:WIDTH-65,
    height:45,
    fontSize:24,
    paddingLeft:45,
    marginHorizontal:5,
    marginLeft:35,
    backgroundColor:'#770A0A',
    color:'white',
    marginTop:15
  },
  btn:{
    width:WIDTH-150,
    height:45,
    justifyContent:'center',
    marginTop:20,
    marginLeft:35,
    backgroundColor:'#302E2E',
    alignItems:'center'
  },
  text:{
    marginTop:205,
    marginLeft:20,
    marginBottom:5,
    color:'white',
    fontSize:24,
    justifyContent:'center',
    textAlign:'center'
  },
  text1:{
    color:'white',
    fontSize:24,
    justifyContent:'center',
    textAlign:'center'
  },
});
