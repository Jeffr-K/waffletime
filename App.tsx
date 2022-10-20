import React, { useState } from 'react';
import { StatusBar, TextInput, StyleSheet, Button, Text, View, ScrollView, FlatList, ListRenderItemInfo } from 'react-native';
import { nanoid } from "nanoid";
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText: any) => {
    // @ts-ignore
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // { text: enteredGoalText, key: Math.random().toString() }
      { text: enteredGoalText, id: Math.random().toString() }
      ]);
  }

  const deleteGoalHandler = (id: any) => {
    // @ts-ignore
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal: any) => {
        return goal.id !== id;
      });
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData: ListRenderItemInfo<any>) => {
            return <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          }}
          keyExtractor={(item, index) => {
            // @ts-ignore
            return item.id;
          }}
          alwaysBounceVertical={true}
        />
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
  goalsContainer: {
    flex: 3
  }
});

export default App;
