import React ,{ useState }from 'react';
import { StyleSheet, Text, View ,ScrollView,Button,TextInput,KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modalbox';


export default function TopScreen() {
  const [addModal, setAddModal] = useState(false);

  const openModal = () => {
    setAddModal(true);
  };
  
  const closeModal = () => {
    setAddModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxes}>
        <View style={styles.namakemonoCheckBoxShadow}/>
        <View style={styles.namakemonoCheckBox}>
        </View>
        <View style={styles.doneCheckBoxShadow}/>
        <View style={styles.doneCheckBox}>
        </View>
      </View>
      <View style={styles.imageBox}>
        <View style={styles.imageShadow}/>
        <View style={styles.image}>
        </View>
      </View>
      <View style={styles.brake}>
        <Text style={styles.bgText}>Today's Task</Text>
        <View style={styles.taskAddButtonShadow}/>
        <Button style={styles.taskAddButton} onPress={openModal} title="aa">
      
        </Button>
      </View>
      <Modal
     style={styles.taskAddScreen}
    //  ref={this.modalRef}
     isOpen={addModal}
     onClosed={closeModal}
     >
     
        <TextInput autoFocus={true} style={styles.taskInput} placeholder='タスクを入力してください。'>
        </TextInput>
   </Modal>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
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
    // backgroundColor: '#ddd',
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
    backgroundColor: '#000',
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

  taskList: {
    height:'100%',
    // flex: 0.2,
    width:'85%',
    // marginTop:20,
    // paddingTop:'%',
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
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


});
