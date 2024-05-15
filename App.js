import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInpuHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInpuHandler}
        />
        <Button title="Add Goal!" onPress={addGoalHandler} />
      </View>
      <View style={styles.textContainer}>
        {courseGoals.map((goal) => (
          <Text key={goal} style={styles.text}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
  textInput: {
    borderColor: "gray",
    minHeight: 20,
    width: "70%",
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    marginRight: 8,
  },
  textContainer: {
    flex: 7,
    justifyContent: "top",
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "300",
    paddingTop: 8,
  },
  button: {
    width: "auto",
  },
});
