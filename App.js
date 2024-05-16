import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="gray"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.textContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  itemKey={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
    flex: 1,
  },
  textContainer: {
    flex: 7,
    justifyContent: "top",
  },
});
