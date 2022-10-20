import React, { useState } from 'react';
import { StatusBar, TextInput, StyleSheet, Button, Text, View } from 'react-native';

const App = () => {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  }
  const addGoalHandler = () => {
    // @ts-ignore
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
      ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder = "your course goal" onChangeText={goalInputHandler}/>
        <Button title='add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
};

// react native flex box 에 대한 개념을 공부할 것.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 3
  }
});

export default App;
