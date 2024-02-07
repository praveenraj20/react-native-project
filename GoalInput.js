import { View, TextInput, Button, StyleSheet,Modal,Image } from "react-native"
import { useState } from "react";


function GoalInput(props){

    const[goalText,setGoalText] = useState('')
  
    function goalInputHandler(Text){
        setGoalText(Text)
       }

    function addGoalHandler(){
      props.addOnGaol(goalText)
      props.onClose();
    }
     
    return(
      <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>  
            <Image style={styles.image} source={require('./assets/images/Goal.png')}/>
            {/* onChangeText -> EeventListner */}
            <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder=' Type your Goal'/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button color='#f31282' title="Cancel" onPress={props.onClose}/>
              </View>
              <View style={styles.button}>
                <Button color={'#5e0acc'} onPress={addGoalHandler} title='Add Goals'/>
              </View>
            </View>
          </View>
      </Modal>


    )
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor:'#cccccc',
        paddingBottom: 24,
        flex: 1,
        padding: 16,
        backgroundColor:'#1A0037'
  
      },
      textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'100%',
        padding: 8,
        borderRadius: 6,
        color:'black',
        backgroundColor: '#e4d0ff'
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop: 16
      },
      button:{
        width:100,
        marginHorizontal:8
      },
      image:{
        width:100,
        height:100,
        margin:20
      
      }
})
export default GoalInput;