import {
  StyleSheet,
  TextInput,
  Button,
  Animated,
  Text,
  View,
  Modal,
  Image,
} from "react-native";
import { useState, useEffect } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [error, setError] = useState("");
  const errorTranslateY = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Animate the error message when error state changes
    if (error) {
      Animated.timing(errorTranslateY, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(errorTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [error, errorTranslateY]);

  const goalInpuHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
    setError("");
  };

  const addGoalHandler = () => {
    const trimmedText = enteredGoalText.trim();

    if (trimmedText.length === 0) {
      setError("Please enter your goal!");
      return;
    }

    props.onAddGoal(trimmedText);
    setEnteredGoalText("");
    setError("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInpuHandler}
          value={enteredGoalText}
        />
        <View>
          <Animated.Text
            style={[
              styles.errorText,
              {
                transform: [
                  {
                    translateY: errorTranslateY.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-5, 5],
                    }),
                  },
                ],
              },
            ]}
          >
            {error}
          </Animated.Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={addGoalHandler}
              color="#eb9100"
            />
          </View>
          <View>
            <Button
              title="Close"
              onPress={() => {
                props.onCancel();
                setError("");
              }}
              color="#e32b34"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#434447",
    backgroundColor: "#434447",
    color: "#120438",
    minHeight: 20,
    width: "100%",
    borderWidth: 2,
    padding: 16,
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a3e47",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  errorText: {
    color: "#c9174c",
    marginTop: 10,
  },
});

export default GoalInput;
