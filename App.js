import React, { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { StyleSheet,View,Button,FlatList
} from 'react-native';

const App = () => {

  const [goals,setGoal] = useState([])
  const [isModalVisible,setIsModalVisible] = useState(false)

  
  function addGoalHandler(goalText){
    // callBackFunction=>to get the previos datas
    setGoal((currentGoals) =>[...currentGoals,goalText])
  }

  function deleteItem(index){
    // console.log('Delete items ' + index)
    const newGoals = goals.filter((el,i)=> i!=index);
    setGoal(newGoals); 
  }
  function startAddHandler(){
    setIsModalVisible(true)
  }

  function closeGoalHandler(){
    setIsModalVisible(false)
  }

  return(
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color='#A070D6' onPress={startAddHandler}/>
        <GoalInput onClose={closeGoalHandler} visible={isModalVisible} addOnGaol={addGoalHandler}/>
          <View style={styles.goalsContainer}>
              <FlatList data={goals} renderItem={(itemData)=> {
                return <GoalItem text={itemData.item} onDelete={()=>deleteItem(itemData.index)} />
              }} >
            </FlatList>
          </View> 
    </View>
  );
}

  const  styles = StyleSheet.create({
    appContainer: {
      paddingTop:50,
      paddingHorizontal: 16,
      flex: 1 ,
      backgroundColor:'#1A0037'

    },
    goalsContainer:{
      flex: 5
    }
  })


export default App;





