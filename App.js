import { StatusBar } from 'expo-status-bar';
import {useEffect} from'react';
import {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';

const App =()=> {
  const[Id,setId]= useState('206');
  const[Advice,setAdvice]= useState('Stay positive and keep moving forward.');
  const[Loading,setLoading]=useState(false);
  function khalilbahlol(){
      setLoading(true)
      fetch('https://api.adviceslip.com/advice/'+random(1, 224))
      .then(data => data.json())
      .then(res => {
      setId(res.slip.id)
      setAdvice(res.slip.advice)
      console.log(res)
      setLoading(false)
    })
    .catch(err => console.error(err)) }
  function random(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return(
<SafeAreaView style={styles.container}>

  <Text style={styles.motivaziontext}>MOTIVAZIONE</Text>
  
 

  <View style={styles.motivationContainer}>
    <Text style={styles.adviceText}>ADVICE #{Id}</Text>
    <Text style={styles.motivationText}>{Advice}</Text>
    <View style={styles.card}>
    <Image
    source={require('./assets/pattern-divider-mobile.png')} 
    style={styles.patternDivider}
    />
    <TouchableOpacity disabled={Loading}
     onPress={khalilbahlol}
     style={styles.buttonContainer}>
      <Image style={styles.buttonText}
        source={require('./assets/icon-dice.png')} 
        />
    </TouchableOpacity>
    </View>
    </View>

  <View style={styles.maintext}>
    <Text style={styles.mo}> CODED BY </Text>
    <Text style={styles.mo1}> MOHAMED MEHADJI </Text>
  </View>

</SafeAreaView>
)
}

const styles = StyleSheet.create(
  {
    container:{
    flex:1,
    paddingTop: 80,
    backgroundColor: '#102D3C',
    alignItems: 'center',  
    justifyContent:'space-evenly'
    },

  card:{
    justifyContent:'space-between',
    alignItems: 'center',
    height:'20%',
    marginBottom:20 ,
  },

  motivaziontext:{
    color:'#2F5365',
    fontSize:40,
    fontWeight: 'bold',
  },
  mo:{
    color:'white',
  },

  mo1:{ 
    color: '#00FF7F',
  },

  maintext:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',    
  },
  motivationContainer:{
    width: 315,
    height: 550,
    backgroundColor: '#2F5365',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  buttonContainer: {
    backgroundColor: '#00FF7F',
    width: 50,
    height: 50,
    borderRadius: 25, 
    justifyContent:'center',
    alignItems: 'center',
  },

  patternDivider:{
  width: 270,
  },
  adviceText:{
    justifyContent:'center',
    alignItems:'center',
    color:'#00FF7F',
    fontSize:20,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  motivationText:{
    textAlign:'center',
    fontSize:15,
    fontWeight: 'bold',
    width:'100%',
    color:'white',
  }

})
export default App 