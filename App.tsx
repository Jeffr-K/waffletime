import React, { useState } from 'react';
import { StatusBar, StyleSheet, Button, View, FlatList, ListRenderItemInfo} from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const addGoalHandler = (enteredGoalText: any) => {
    // @ts-ignore
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // { text: enteredGoalText, key: Math.random().toString() }
      { text: enteredGoalText, id: Math.random().toString() }
      ]);
    endAddGoalHandler()
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
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
    <>
      <StatusBar backgroundColor='white' barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
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
    </>
  );
};

// react native flex box 에 대한 개념을 공부할 것.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 3
  }
});

export default App;
