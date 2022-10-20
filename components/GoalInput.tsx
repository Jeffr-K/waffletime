import React, { useState } from "react";
import { Button, GestureResponderEvent, StyleSheet, TextInput, View} from "react-native";


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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder = "your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='add Goal' onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
})
