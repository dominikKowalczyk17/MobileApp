import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.itemKey)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "300",
    borderRadius: 8,
    backgroundColor: "#434447",
    margin: 6,
    minHeight: 50,
    justifyContent: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
