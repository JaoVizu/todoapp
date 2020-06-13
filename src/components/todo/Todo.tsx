import React, {useState, useEffect, useRef} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, NativeSyntheticEvent, TextInputChangeEventData, ScrollView, Button} from 'react-native'
import { Feather as Icon} from '@expo/vector-icons'

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

      <View>
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
          <Text style={styles.buttonText}>OK!</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f2f2f2'
  },
  textTitle : {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 20
  },
  inputStyle : {
    height: 40,
    borderColor: '#B335F7',
    borderWidth: 2,
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
  },
  button : {
    backgroundColor: '#691F91',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50
  },
  buttonText : {
    color : '#f2f2f2',
    fontSize: 20,
    fontWeight: "bold"
  },
  tasksContainer : {
    marginTop: 20
  },
  task : {
    backgroundColor: "#B335F7",
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 10
  },
  taskText : {
    fontSize: 16,
    color: '#f2f2f2',
    textTransform: 'uppercase'
  },
  taskButton : {
    backgroundColor: '#691F91',
    padding: 10,
    borderRadius: 10
  },
  taskIcon: {
    fontSize: 24,
    color: '#f2f2f2',
    fontWeight: "bold"
  }
})

export default Todo