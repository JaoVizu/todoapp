import React from 'react'
import { StyleSheet } from 'react-native'

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
  formContainer : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyle : {
    flexBasis: 230,
    height: 40,
    borderColor: '#A6A6A6',
    borderWidth: 2,
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
  },
  button : {
    backgroundColor: '#A6A6A6',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5
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
    backgroundColor: "#D9D9D9",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A6'
  },
  taskText : {
    fontSize: 18,
    color: '#222'
  },
  taskButton : {
    padding: 10,
  },
  taskIcon: {
    fontSize: 24,
    color: '#222',
    fontWeight:  "bold"
  }
})

export default styles