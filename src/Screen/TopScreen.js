import React ,{ useState }from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput,} from 'react-native';
import Modal from 'react-native-modalbox';
import TaskCard from '../Compornent/TaskCard';



export default function TopScreen(props) {
  const [addModal, setAddModal] = useState(false);
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState('aaa');

  const openModal = () => {
    setAddModal(true);
  };
  
  const closeModal = () => {
    setAddModal(false);
  };

  // const changing = () => {
  //   setDisable(true);
  // };

  // const changed = () => {
  //   setDisable(false);
  // };
  
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxes}>
        <View style={styles.namakemonoCheckBoxShadow}/>
        <TouchableOpacity style={styles.namakemonoCheckBox} onPress={ () => props.navigation.navigate('NamakemonoListScreen') }>
          
        </TouchableOpacity>
        <View style={styles.doneCheckBoxShadow}/>
        <TouchableOpacity style={styles.doneCheckBox} onPress={ () => props.navigation.navigate('DoneListScreen') }>
        </TouchableOpacity>
      </View>
      <View style={styles.imageBox}>
        <View style={styles.imageShadow}/>
        <View style={styles.image}>
        </View>
      </View>
      <View style={styles.brake}>
        <Text style={styles.bgText}>Today's Task</Text>
        <TouchableOpacity style={styles.taskAddButtonShadow}/>
        <TouchableOpacity style={styles.taskAddButton} onPress={openModal} >
        </TouchableOpacity>
      </View>
      <Modal
     style={styles.taskAddScreen}
    //  ref={this.modalRef}
     isOpen={addModal}
     onClosed={closeModal}
    //  isDisabled={disable}
     >
     
        <TextInput 
        autoFocus={true} 
        style={styles.taskInput} 
        placeholder='タスクを入力してください。' 
        enablesReturnKeyAutomatically={true} 
        // onEndEditing={changed}
        // onChangeText={changing}
        >
        </TextInput>
   </Modal>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.taskList} alignItems='center'>
        <TaskCard　task={count}/>
        <TaskCard　task='夜ご飯の準備'/>
        <TaskCard　task='夜ご飯の準備'/>
        <TaskCard　task='夜ご飯の準備ああああああああああああああああああああああああああああああ'/>
        <TaskCard　task='夜ご飯の準備'/>
        <TaskCard　task='夜ご飯の準備'/>
        <TaskCard　task='夜ご飯の準備'/>
        <TaskCard　task='夜ご飯の準備'/>


        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F1F3F6',
        alignItems: 'center',
        paddingTop:'15%',
        // justifyContent: 'center',
            // backgroundColor: '#ddd',
    
      },

  checkBoxes: {
    height:'12%',
    // flex: 0.2,
    width:'85%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ddd',
  },
  namakemonoCheckBox: {
    height:70,
    width:'70%',
    backgroundColor: '#F1F3F6',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3754AA',
    shadowOffset: {
    width: 4,
    height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },

  namakemonoCheckBoxShadow: {
    position:'absolute',
    height:70,
    width:'70%',
    borderRadius:10,
    backgroundColor: '#F1F3F6',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:0,
    shadowColor: '#fff',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },

  doneCheckBox: {
    height:70,
    width:70,
    borderRadius:10,
    backgroundColor: '#F1F3F6',
    marginLeft:'auto',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3754AA',
    shadowOffset: {
    width: 4,
    height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },

  doneCheckBoxShadow: {
    position:'absolute',
    height:70,
    width:70,
    borderRadius:10,
    right:0,
    backgroundColor: '#F1F3F6',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:0,
    shadowColor: '#fff',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },

  imageBox: {
    height:'30%',
    width:'85%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ddd',
  },
  image:{
    height: '90%',
    width:'100%',
    borderRadius:10,
    backgroundColor: '#F1F3F6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3754AA',
    shadowOffset: {
    width: 4,
    height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },

  imageShadow:{
    position:'absolute',
    height: '90%',
    width:'100%',
    borderRadius:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },

  brake: {
    height:'12%',
    // flex: 0.2,
    width:'85%',
    // marginTop:20,
    // paddingTop:'%',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    

  },

  bgText:{
    fontSize:30,
    fontFamily:'PingFangSC-Light',
    letterSpacing:3,
    backgroundColor: '#F1F3F6',
    marginLeft:10,
    

  },

  taskAddButton: {
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor: '#F1F3F6',
    marginLeft:'auto',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3754AA',
    shadowOffset: {
    width: 3,
    height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },

  taskAddButtonShadow: {
    position:'absolute',
    height:50,
    width:50,
    borderRadius:25,
    right:0,
    backgroundColor: '#F1F3F6',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:0,
    shadowColor: '#fff',
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },


  taskAddScreen: {
    // position:'absolute',
    height:290,
    // flex: 0.2,
    width:'100%',
    marginTop:'auto',
    marginBottom:200,
    // bottom:0,
    // paddingTop:'%',
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    borderRadius:20,
  },

  taskInput: {
    height:60,
    // flex: 0.2,
    width:'85%',
    marginTop:0,
    // paddingTop:'%',
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    fontSize:20,
  },

  taskList:{
    height:'50%',
    width:'85%',
    paddingTop:5,
    // backgroundColor:'#ccc',
    zIndex:0,
  },

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
    fontSize:20,
  },

  taskContainerShadow:{
    
    borderRadius:25,
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
      height:30,
      width:'100%',
      marginTop:10,
      backgroundColor: '#ccc',

  },



});
