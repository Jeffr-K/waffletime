import React, { useState } from "react";
import { Button, GestureResponderEvent, Image, Modal, StyleSheet, TextInput, View} from "react-native";


export default function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  }

  const addGoalHandler = () => {
    // @ts-ignore
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder = "your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
          </View>
          <View style={styles.button}>
            <Button title='add Goal' onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
})
