import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f4f4f4'
  },
  textTitle : {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 20,
    color: "#933CCC"
  },
  formContainer : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyle : {
    flexBasis: 230,
    height: 40,
    borderColor: '#B84BFF',
    borderWidth: 2,
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
  },
  button : {
    backgroundColor: '#B84BFF',
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
    backgroundColor: '#933CCC',
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D697FF'
  },
  taskText : {
    fontSize: 18,
    color: '#f2f2f2'
  },
  taskButton : {
    padding: 10,
  },
  taskIcon: {
    fontSize: 24,
    color: '#f2f2f2',
    fontWeight:  "bold"
  }
})

export default styles