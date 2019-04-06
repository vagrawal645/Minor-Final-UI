import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,Dimensions,TouchableOpacity} from 'react-native';
//type Props = {};
import bgimage from './Images/bg.jpg';
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
        <Text style = {styles.text}> Recover Password </Text>
      </View>
      <View>
        <TextInput
        style = {styles.input}
          placeholder='New Password'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
        />
      </View>
      <View>
        <TextInput
        style = {styles.input}
          placeholder='Confirm Password'
          placeholderTextColor='white'
          secureTextEntry={true}
          underlineColorAndroid='transparent'
        />
      </View>
      <TouchableOpacity style = {styles.btn}>
        <Text style = {styles.text1}>Submit</Text>
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
    width:WIDTH-25,
    height:45,
    fontSize:24,
    paddingLeft:45,
    marginHorizontal:25,
    backgroundColor:'#770A0A',
    color:'white',
    marginTop:15
  },
  btn:{
    width:WIDTH-25,
    height:45,
    justifyContent:'center',
    marginTop:20,
    backgroundColor:'#302E2E',
    alignItems:'center'
  },
  text:{
    marginTop:125,
    marginBottom:25,
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
