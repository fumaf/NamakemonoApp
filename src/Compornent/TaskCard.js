import React ,{ useState }from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput,} from 'react-native';
import Modal from 'react-native-modalbox';



export default function TaskCard(props) {


  return (
        <View style={styles.taskContainerShadow}>
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{props.task}</Text>
            <View style={styles.method}></View>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({

  taskContainer: {
    // height:70,
    width:300,
    borderRadius:10,
    padding:10,
    backgroundColor: '#F1F3F6',
    justifyContent: 'center',
    shadowColor: '#3754AA',
    shadowOffset: {
    width: 4,
    height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },

  taskText:{
    fontSize:15,
  },

  taskContainerShadow:{  
    borderRadius:25,
    marginTop:10,
    backgroundColor: '#F1F3F6',
    shadowColor: '#fff',
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },


  method:{
      height:20,
      width:'100%',
      marginTop:10,
      backgroundColor: '#ccc',
  },



});
