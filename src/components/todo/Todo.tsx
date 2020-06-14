import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, ToastAndroid, NativeSyntheticEvent, TextInputChangeEventData, ScrollView} from 'react-native'
import { Feather as Icon} from '@expo/vector-icons'

import styles from './TodoStyle'

const Todo = () => {

  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([]);

  function handleInputChange(event: NativeSyntheticEvent<TextInputChangeEventData>){
    setNewTask(event.nativeEvent.text);
  }

  function addTask(){
    if(newTask === ''){
      ToastAndroid.show("Insira uma palavra", ToastAndroid.SHORT)
      return;
    }
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function completeTask(index: number){
    const taskArray = [...tasks]
    taskArray.splice(index, 1);
    
    ToastAndroid.show("Tarefa Concluída!", ToastAndroid.SHORT)
    setTasks(taskArray)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Todo List</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputStyle}
          onChange={handleInputChange}
          value={newTask}
        >
        </TextInput>
        <TouchableOpacity 
          style={styles.button}
          onPress={addTask}  
        >
          <Text style={styles.buttonText}><Icon style={styles.taskIcon} name="corner-right-down"/></Text>
        </TouchableOpacity> 
      </View>
      
      <ScrollView style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View style={styles.task} key={index}>
            <Text style={styles.taskText}>{task}</Text>
            <TouchableOpacity style={styles.taskButton} onPress={() => completeTask(index)}>
              <Icon name="check" style={styles.taskIcon}/>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}



export default Todo