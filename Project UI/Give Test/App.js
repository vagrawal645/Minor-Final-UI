import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,Dimensions,TouchableOpacity} from 'react-native';
//type Props = {};
import bgimage from './Images/bg2.jpg';
const {width:WIDTH} = Dimensions.get('window');
export default class App extends Component {
  
  render() {
    return (
      <ImageBackground 
        source={bgimage}
        style={styles.container}
        resizeMode="stretch"
      >
      <View style = {styles.quiz}>
        <View style = {styles.question}>
          <Text style = {styles.text1}>Q: What Is the Capital of MP?</Text>
        </View>
        <View style = {styles.options}>
          <View style = {styles.options1}>
            <View style = {styles.options3}>
            <Text style = {styles.text1}>(A)</Text>
            </View>
            <View style = {styles.options3}>
            <Text style = {styles.text1}>(B)</Text>
            </View>
            <View style = {styles.options3}>
            <Text style = {styles.text1}>(C)</Text>
            </View>
            <View style = {styles.options3}>
            <Text style = {styles.text1}>(D)</Text>
            </View>
          </View>
          <View style = {styles.options2}>
            <View style = {styles.options3}>
            <TouchableOpacity style={styles.options4}><Text style = {styles.text1}>Calcutta</Text></TouchableOpacity>
            </View>
            <View style = {styles.options3}>
            <TouchableOpacity style={styles.options4}><Text style = {styles.text1}>Bhopal</Text></TouchableOpacity>
            </View>
            <View style = {styles.options3}>
            <TouchableOpacity style={styles.options4}><Text style = {styles.text1}>Indore</Text></TouchableOpacity>
            </View>
            <View style = {styles.options3}>
            <TouchableOpacity style={styles.options4}><Text style = {styles.text1}>Jaipur</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
      <View style = {styles.btnView}>
        <TouchableOpacity style = {styles.btn}>
        <Text style = {styles.text}>Submit & Next</Text>
        </TouchableOpacity>
      </View>
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
  text:{
    color:'white',
    fontSize:27,
    textAlign:'center',
  },
   text1:{
    marginTop:10,
    color:'white',
    fontSize:20,
    marginHorizontal:6,
    position:'relative',
    flexDirection:'column',
    textAlign:'center'
  },
  // input1:{
  //   width:WIDTH-35,
  //   height:45,
  //   fontSize:24,
  //   marginHorizontal:45,
  //   backgroundColor:'#770A0A',
  //   color:'#a5a9af',
  //   marginTop:10,
  //   textAlign:'center'
  // },
  btn:{
    width:WIDTH-200,
    height:45,
    justifyContent:'center',
    backgroundColor:'#302E2E',
    alignItems:'center'
  },
  btnView:{
    flex:1,
    height:45,
    justifyContent:'center',
    marginTop:4,
    alignItems:'center'
  },
  quiz:{
    flex:4,
    alignItems:'center',
    marginTop:150,
    backgroundColor:'#302E2E',
    width:WIDTH-25,
    height:45,
  },
  question:{
    flex:1,
    backgroundColor:'#380303',
    width:WIDTH-25
  },
  options:{
    flex:6,
    marginVertical:12,
    backgroundColor:'#302E2E',
    width:WIDTH-25,
    flexDirection:"row"
  },
  options1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  options2:{
    flex:4,
    //alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  options3:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    textAlign:'center'
  },
  options4:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#3d3b3b',
    marginVertical:3,
    marginRight:15,
    height:50,
    justifyContent:'center',
    textAlign:'center'
  }
});
